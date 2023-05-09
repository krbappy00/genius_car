import React, { useContext } from 'react';
import logo from './logo.svg'
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FiLogOut } from "react-icons/fi";

const Header = () => {
    const { user } = useContext(AuthContext)
    const { logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
        .then(() => {
            console.log("log out!")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
      <div className="flex justify-between items-center mt-0 bg-white font-inter mb-8 sticky top-0 pt-4 pb-4 z-30">
        <div className="w-28">
          <img src={logo} alt=""></img>
        </div>
        <div className="flex text-base font-semibold text-lg">
          <Link to="/">
            <p className="px-2.5">Home</p>
          </Link>
          {user ? (
            <>
              <Link to="/orders">
                <p className="px-2.5">Orders</p>
              </Link>
            </>
          ) : (
            <></>
          )}
          <p className="px-2.5">About</p>
          <Link to="/services">
            <p className="px-2.5">Service</p>
          </Link>

          <p className="px-2.5">Blog</p>
          <p className="px-2.5">Contact</p>
        </div>
        <div className="flex items-center">
          <FiShoppingCart className="text-base mr-4 text-4xl"></FiShoppingCart>
          <FiSearch className="text-base mr-8 text-4xl"></FiSearch>
          {user ? (
            <>
              <h2>{user.email}</h2>
              <button
                title="LogOut"
                onClick={handleLogout}
                className="ml-2 bg-default text-white p-2 rounded-md"
              >
                <FiLogOut></FiLogOut>
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="border font-semibold hover:bg-default hover:text-white rounded border-default p-4 w-44 font-inter text-default">
                  Login
                </button>
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    );
};

export default Header;