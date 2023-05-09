import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const cloud_name = "drsbymkpw";
    const preset_key = "image_upload";

    const handleImage = async(event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset_key);
        const img = 'img_url';
        const setUrl = { ...product }
        setLoading(true)
        await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            .then(async(res) => {
                setUrl[img] = res.data.secure_url;
                await setProduct(setUrl);
                setLoading(false);
        } )
            .catch(err => console.log(err))
    }
    const handleChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleSubmitClick = async (event) => {
        event.preventDefault();
        
         await axios.post('https://genius-cars-service.onrender.com/product', product)
            .then(res => {
                setSuccess('Product Added successfully ✅👌')
            })
            .catch(err => console.log(err))
        event.target.reset();
    }
    return (
        <div className='h-screen table mx-auto'>
            <h1 className='text-3xl mb-4'>Add Car Product</h1>
            <form className='' action="" onSubmit={handleSubmitClick}>
                <label>Product Name:</label><br />
                <input className='border' name='name' onChange={handleChange} type='text' placeholder='name' required></input>
                <br />
                <label>Product Price:</label><br />
                <input className='border' name='price' onChange={handleChange} type='number' placeholder='price' required></input><br />
                <label className='mt-2'>Product Image:</label><br />
                <input className='border' name='image' onChange={handleImage} type="file" required></input> <br />
                {
                    success ? <h1 className='text-2xl text-green-800'>{ success}</h1>:<></>
                }
                <button disabled={loading} className='p-4 rounded-md disabled:bg-slate-400 text-bold border-none bg-default mt-2 text-white' type='submit'>Submit Product</button>
            </form>
        </div>
    );
};

export default AddProduct;