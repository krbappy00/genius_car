import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Team = () => {
    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(false);

    const cloud_name = "drsbymkpw";
    const preset_key = "image_upload";

    const handleImage = async(event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset_key);
        const img = 'img_url';
        const setUrl = { ...team }
        setLoading(true)
        await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            .then(async(res) => {
                setUrl[img] = res.data.secure_url;
                await setTeam(setUrl);
                setLoading(false);
        } )
            .catch(err => console.log(err))
    }
    const handleChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newTeam = { ...team };
        newTeam[field] = value;
        setTeam(newTeam);
    }

    const handleSubmitClick = async (event) => {
        event.preventDefault();
        
         await axios.post('https://genius-cars-service.onrender.com/teams', team)
            .then(res => {
                console.log(res)
            })
        .catch(err => console.log(err))
    }
    return (
        <div className='h-screen table mx-auto'>
            <h1 className='text-3xl mb-4'>Add Team Member</h1>
            <form className='' action="" onSubmit={handleSubmitClick}>
                <label>Name:</label><br />
                <input className='border' name='name' onChange={handleChange} type='text' placeholder='name'></input>
                <br />
                <label>Designation:</label><br />
                <input className='border' name='designation' onChange={handleChange} type='text' placeholder='designation'></input><br />
                <label className='mt-2'>Image:</label><br />
                <input className='border' name='image' onChange={handleImage} type="file"></input> <br />
                <button disabled={loading} className='p-4 rounded-md text-bold border-none bg-default mt-2 text-white' type='submit'>Submit team</button>
            </form>
        </div>
    );
};

export default Team;