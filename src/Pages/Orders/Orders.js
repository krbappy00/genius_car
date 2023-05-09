import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import axios from "axios";
import banner from '../../assets/Rectangle 1548.png'
import { useEffect } from 'react';
import '../Orders//Orders.css';


const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders,setOrders] = useState([])
    useEffect(() => {
            axios.get(`https://genius-cars-service.onrender.com/orders?email=${user?.email}`)
            .then((res) => {
              setOrders(res.data)
            })
            .catch((err) => console.log(err));
    },[user?.email])
    
    return (
      <div>
        {/* <div className="h-[320px] rounded-xl overflow-hidden">
          <img className="w-full " src={banner} alt="" />
        </div> */}
        <div className="mt-8 mb-8">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-default dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {orders.map((order) => (
                <>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {order.serviceName}
                      </th>
                      <td className="px-6 py-4">{order.customerName}</td>
                      <td className="px-6 py-4">{order.phone}</td>
                      <td className="px-6 py-4">${order.price}</td>
                      <td className="px-6 py-4">
                        <button className="bg-default p-2 px-4 rounded text-white">
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
};

export default Orders;