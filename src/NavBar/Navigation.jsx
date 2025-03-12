import { NavLink } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../assets/images/logo.png"
import { IoMdCart } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { FaCircleUser } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";



function Navigation() {
  const { user, isAuthenticated, logout } = useAuth0();
  console.log(user, isAuthenticated)


  const { state } = useContext(CartContext)
  const totalItem = state.cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0)

  return (
    <div className=" flex justify-around px-3 py-3 shadow shadow-gray-500">


      <div className=" flex items-center justify-center gap-2.5">
        <img className="h-10 cursor-pointer" src={logo} alt="#logo" />
        <NavLink className="text-green-900 font-medium text-2xl " to="/">momos</NavLink>
      </div>

      <div className=" space-x-8 flex items-center mr-9 text-gray-500">
        <NavLink className="hover:scale-110" to="/about">About Us</NavLink>
        <NavLink className="hover:scale-110" to="/menu">Our Menu</NavLink>
        <NavLink className="hover:scale-110" to="/service">Our Service</NavLink>
        <NavLink className="hover:scale-110" to="/allergy">Allergy Advice</NavLink>

        {isAuthenticated ?
          (<button onClick={() => {
            logout();
          }}
            className=" bg-red-700 rounded-3xl p-2 text-white  w-32">
            Logout
          </button>)
          :
          (<div className="space-x-4 text-lg">
            <NavLink className="hover:scale-110" to="/login">Login</NavLink>
            <NavLink className="hover:scale-110" to="/signup">Sign Up</NavLink>
          </div>)}

        <NavLink className="hover:scale-110 text-red-600 text-2xl relative " to="/cart"><IoMdCart /><span className="absolute -top-4 text-sm left-2">{totalItem}</span></NavLink>
      </div>

      <div className=" flex items-center gap-2">
        <NavLink to="https://www.facebook.com/" target="_blank">
          <IoLogoFacebook className="size-6 hover:scale-110  text-gray-400" />
        </NavLink>

        <NavLink to="">
          <AiFillTikTok className="size-6 hover:scale-110  text-gray-400" />
        </NavLink>

        <NavLink to="">
          <FaInstagramSquare className="size-6  hover:scale-110  text-gray-400" />
        </NavLink>

        <NavLink className="border-2 rounded-3xl w-28 text-center text-white  py-1.5 ml-5 bg-orange-600 hover:scale-90 " to="/contact">
          Contact Us
        </NavLink>
      </div>

      <div>
        {isAuthenticated ? (
          <NavLink to="/profile">
            <img className="rounded-full h-10 w-10" src={user.picture} alt="" />
          </NavLink>
        ) :
          (<FaCircleUser size={40} />
          )}
      </div>



    </div>
  )
}

export default Navigation
