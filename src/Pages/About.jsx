
import chef from "../assets/images/chef.png"
import gw from "../assets/images/gw.png"
import backofabout from "../assets/images/backofabout.png"
import tattoHand from "../assets/images/tattoHand.png"
import buffmomo from "../assets/images/buffmomo.png"
import blurygirl from "../assets/images/blurygirl.png"
import bufffrymomo from "../assets/images/bufffrymomo.png"
import kothemomo from "../assets/images/kothemomo.png"
import ipersonsmall from "../assets/images/ipersonsmall.png"
import lady from "../assets/images/lady.png"
import blurybackground from "../assets/images/blurybackground.png"
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import headchef from "../assets/images/headchef.png"
import assistantchef from "../assets/images/assistantchef.png"
import assistantchef2 from "../assets/images/assistantchef2.png"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";



function About() {
  return (
    <>
      <div>
        <div className="flex justify-around py-36 ">
          {/* Left Section */}
          <div className="p-9 space-y-8">
            <h1 className="text-8xl text-teal-700 font-Allura  ">About Us</h1>
            <div className="space-y-4">
              <p className="text-gray-500 tracking-widest ">WE PRIDE OURSELF ON</p>
              <h2 className="text-4xl font-semibold ">
                <span className="text-orange-600">Our authentic momo recipes </span> <br />
                passed down through <br />
                generations
              </h2>
            </div>
          </div>

          {/* Right Section with Background Image */}
          <div className="pr-9 relative right-16">
            <div
              className="relative h-[400px] top-10 w-[400px] bg-cover bg-center flex items-center justify-center left-40"
              style={{
                backgroundImage: `url(${gw})`,
              }}
            >
              <img src={chef} alt="Chef" className="h-[520px]  object-contain absolute -top-32  " />
            </div>
          </div>
        </div>

        {/* This is for background image section */}
        <div
          className="w-full h-[700px] bg-cover bg-center "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${backofabout})`,
          }}
        >
          <div className="text-white space-y-5   p-40">
            <h1 className="font-semibold mt-56 text-3xl ">Process behind the making</h1>
            <p className="text-2xl">See how we make momos that you like from only the best ingredients</p>

            <button className="bg-teal-700 rounded-3xl p-3 w-48">Watch The Video</button>
          </div>

        </div>

        {/* This is for another section  */}
        <div className="p-20 flex justify-around">
          <div className=" space-y-7 w-[350px]">
            <h1 className="text-3xl font-semibold">Our momos are {" "}
              <span className="text-orange-600">made <br /> with love</span>
            </h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi</p>
          </div>

          {/* This is for image section */}
          <div className="relative ">
            <img className="h-96" src={tattoHand} alt="" />
            <img className="h-40 absolute top-64 -left-32" src={buffmomo} alt="" />
          </div>
        </div>


        {/* This is for another */}
        <div className="flex p-20 justify-around ">
          <div className="relative">
            <img className="h-96" src={blurygirl} alt="" />
            <img className="h-40 absolute top-64 -right-32" src={bufffrymomo} alt="" />
          </div>

          <div className="space-y-7 w-[350px]">
            <h1 className="text-3xl font-semibold">Taste the difference with <br /> <span className="text-orange-600">our handcrafted momos</span></h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
          </div>
        </div>

        {/* This is for  */}
        <div className="flex p-20 justify-around">
          <div className="space-y-7 w-[350px]">
            <h1 className="text-3xl font-semibold">Our momos are the <br />
              perfect <span className="text-orange-600">blend of tradition <br />
              </span> and <span className="text-orange-600">innovation</span>
            </h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
          </div>

          <div className="relative ">
            <img className="h-96" src={ipersonsmall} alt="" />
            <img className="absolute top-72 -left-24 h-40" src={kothemomo} alt="" />
          </div>
        </div>

        {/* This is for lady with blurybackground */}

        <div
          className="flex mt-16 h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${blurybackground})` }}
        >
          {/* Left Side - Quote Section */}
          <div className="text-white p-36 w-[1000px] space-y-4">
            <p className="text-4xl "><RiDoubleQuotesL /></p>
            <p className="text-2xl font-light w-[550px]">
              Momo is not just about sustenance, it's about bringing people together and creating memories.
              At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy
              delicious momo, great company, and unforgettable experiences.
            </p>
            <div className="mt-16">
              <h2 className="text-4xl font-semibold">Marcus Schleifer</h2>
              <h3 className="text-xl font-semibold text-gray-300">CEO</h3>
            </div>

            <div className="flex justify-end gap-9 text-3xl p-6 ">
              <button><FaArrowCircleLeft /></button>
              <button><FaArrowCircleRight /></button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-[525px]">
            <img className="h-full object-cover" src={lady} alt="Lady enjoying momo" />

          </div>
        </div>

        {/* ...This is for team section */}
        <div className="p-28">
          <div className="text-center">
            <h1>Meet The Team</h1>
            <p>Our talented team members who delivers only the best results</p>
          </div>

          <div className="flex justify-around relative">
            <div>
              <img className="h-96 w-68" src={headchef} alt="" />
            </div>
            <div>
              <img className="h-96  " src={assistantchef} alt="" />
              <h1 className="relative -top-14 text-white text-lg font-semibold p-3  ">Assistant Chef</h1>
            </div>
            <div>
              <img className="h-96 " src={assistantchef2} alt="" />
              <h1>Assistant Chef</h1>
            </div>
          </div>
          <div className="flex ">
            <p className="ml-24 text-2xl"><span className="font-bold">01</span> / <span className="text-gray-400">05</span></p>
            <div className="flex ml-[950px] gap-5">
              <button className="rounded-full p-2 border-2  border-gray-200"><FaArrowLeft /></button>
              <button className="rounded-full p-2 border-2  border-gray-200"><FaArrowRight /></button>
            </div>
          </div>
        </div>


        <div className="flex w-full justify-between items-start -mt-5n px-10 bg-gray-50 py-9">

          {/* Logo and Description Section */}
          <div className="p-11 space-y-2   w-1/3">
            <div className="flex items-center gap-1">
              <img className="h-12" src={logo} alt="logo" />
              <p className="text-2xl text-teal-700 font-semibold">momos</p>
            </div>
            <div className="max-w-80 text-sm">
              <p>Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc nullam morbi urna amet suspendisse nullam ac vivamus.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-x-16">
            <div className="p-5 space-y-2">
              <h1 className="font-semibold text-teal-700 text-2xl">momos</h1>
              <div className="flex flex-col space-y-2">
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/menu">Our Menu</NavLink>
                <NavLink to="/services">Our Services</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
            </div>

            <div className="p-5 space-y-2 ">
              <h1 className="font-semibold text-teal-700 text-2xl">Legals</h1>
              <div className="flex flex-col space-y-2">
                <NavLink to="/terms">Terms & Conditions</NavLink>
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/support">Support</NavLink>
              </div>
            </div>
          </div>



          {/* Social Media Section */}
          <div className="text-center">
            <h1 className="text-teal-700 text-2xl mb-4">Follow Us</h1>

            <div className="flex flex-wrap justify-center gap-5 w-56 mx-auto">
              <NavLink to="https://www.facebook.com/" target="_blank"> <div className="text-4xl flex items-center justify-center text-gray-400 w-12 h-12"><FaFacebook /></div></NavLink>
              <NavLink to="https://www.linkedin.com/in/laxman-b-ghimire-5948a4312/" target="_blank"><div className="text-4xl flex text-gray-400 items-center justify-center w-12 h-12"><FaLinkedin /></div></NavLink>
              <NavLink><div className="text-4xl flex items-center justify-center text-gray-400 w-12 h-12"><AiFillTwitterSquare /></div></NavLink>
              <NavLink to="https://www.youtube.com/@LaxmanGhimire-gk7co"><div className="text-4xl text-gray-400 flex items-center justify-center w-12 h-12"><FaSquareYoutube /></div></NavLink>
              <NavLink to="https://www.instagram.com/lakxh_ghimire/" ><div className="text-4xl text-gray-400 flex items-center justify-center w-12 h-12"><FaInstagramSquare /></div></NavLink>
              <NavLink><div className="text-4xl flex items-center justify-center text-gray-400 w-12 h-12"><AiFillTikTok /></div></NavLink>
            </div>
          </div>

        </div>
        <hr className="w-7xl ml-36 text-gray-200" />

        {/* Footer */}
        <div className="p-6 text-center bg-gray-50">
          <p>Copyright &copy; 2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default About
