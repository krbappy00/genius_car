import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CountryDropdown from 'country-dropdown-with-flags-for-react'; 
import { AuthContext } from '../../Contexts/AuthProvider';
import { BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";

const Checkout = () => {
  const [orderPlace, setOrderPlaced] = useState(false)
  const service = useLoaderData();
    const {user} = useContext(AuthContext)
    const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const name = [form.firstName.value,form.lastName.value].join(' ');
      const phone = form.phone.value;
      const email = form.email.value || "undefine";
      const address = form.address.value;

      const order = {
        img:service.img? service.img: service.img_url,
        serviceId: service._id,
        serviceName: service.name,
        price: service.price,
        email,
        customerName:name,
        phone,
        address,
        
      };
      await axios.post('https://genius-cars-service.onrender.com/order', order)
        .then(res => {
          setOrderPlaced(true)
              
            })
            .catch(err => console.log(err))
        event.target.reset();
    };
    
    return (
      <div className="flex  mb-16 ">
        <div className="w-[50%] mx-auto ">
          <h1 className="font-inter text-3xl font-extrabold mb-4 ml-3">
            Shipping Information
          </h1>
          <form className="p-4 w-[full]" onSubmit={handleSubmit}>
            <CountryDropdown
              className="text-xl h-[50px] w-[full] rounded-lg p-6 border-2"
              preferredCountries={["gb", "us"]}
              value="Country"
              handleChange={(e) => console.log(e.target.value)}
            ></CountryDropdown>
            <div className="flex">
              <div class="form-control w-full max-w-xs mt-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs ml-4 mt-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex">
              <div class="form-control w-full max-w-xs mt-4 mr-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs mt-4">
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email Address"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            <div class="form-control w-full max-w-xs mt-4">
              <textarea
                name="address"
                class="textarea input-bordered"
                placeholder="Shipping Address"
              ></textarea>
            </div>
            <button className="w-full" type="submit">
              <div className="bg-default p-4 rounded-lg mx-auto mb-8 mt-4 flex justify-center">
                <h2 className="text-xl text-center font-inter text-white">
                  Place Order
                </h2>
                <BiRightArrowAlt className="text-3xl ml-2 text-white"></BiRightArrowAlt>
              </div>
            </button>
            { orderPlace? <h1>Placed Order successfully!</h1>: <></>}
          </form>
        </div>
        <div className="w-[50%] ml-20 ">
          <h1 className="font-inter text-3xl font-extrabold mb-4 ">
            Selected Service
          </h1>
          <div className="bg-orange-100 p-4 pt-4 rounded-lg">
            <div className="divide-y-[1px] divide-dashed divide-gray-400   ">
              <div className="flex items-center justify-between  p-2 rounded-lg pb-4">
                <div className="flex">
                  <img
                    className="w-[100px] h-[100px] rounded-lg"
                    src={service.img? service.img: service.img_url}
                    alt=""
                  />
                  <div>
                    <h1 className="font-inter text-3xl ml-2 mt-2">
                      {service.name}
                    </h1>
                    <p className="ml-2 font-inter text-gray-400">
                      {service.facility ? service.facility[0].name: <p>7 Days delivery</p> }
                    </p>
                    <p className="ml-2 font-inter text-gray-400">
                      {service.facility ? service.facility[1].name: <p>1 Years Free Return</p> }
                    </p>
                  </div>
                </div>

                <h2 className="font-inter text-3xl mb-8">
                  <br /> ${service.price}
                </h2>
              </div>
              <div className="flex pt-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Add discount code"
                  class="input input-bordered w-[75%] my-4"
                />

                <div className="bg-default w-[20%] h-[47px] rounded-lg mx-auto mt-4 flex justify-center">
                  <h2 className="text-xl font-inter text-white m-auto">
                    Submit
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-between font-inter font-bold text-xl pl-4 pr-4 pt-4">
              <p>Shipping (10%) :</p>
              <p>${Math.round((service.price / 100) * 10)}</p>
            </div>
            <div className="flex text-xl justify-between font-inter font-bold pl-4 pr-4 pt-4">
              <p>Total :</p>
              <p>
                $
                {Math.round((service.price / 100) * 10) +
                  parseInt(service.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Checkout;