import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";



function Contact() {
  return (
    <>
      <div className=' '>
        {/* This is for our contact */}
        <div className='text-teal-700 text-center p-11 '>
          <h2 className='text-2xl italic font-Allura  '>Our Contact</h2>
        </div>

        {/* This is for get in touch */}
        <div className='my-5 text-center'>
          <p className='text-sm tracking-wider text-gray-400 '>GET IN TOUCH</p>
          <h1 className='font-semibold my-3 text-2xl'>
            <span className='text-orange-600 '>Our Friendly Team </span>
            would love to hear from you
          </h1>
        </div>

        {/* Details Section */}
        <div className="flex justify-center gap-14 p-5">

          {/* Location Section */}
          <div className="bg-white shadow-2xs rounded-r-2xl p-6 w-72 border-r-2 border-gray-200">
            <h3 className="font-semibold  gap-2.5 flex uppercase text-gray-700"><FaLocationDot className="text-2xl text-orange-600" />Location</h3>
            <div className="text-sm mt-4">
              <p className="text-gray-600">
                New Baneshwor -41201,<br />
                Kathmandu, Bagmati, Nepal
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="bg-white shadow-2xs rounded-r-2xl p-6 w-72 border-r-2 border-gray-200">
            <h3 className="font-semibold  uppercase text-gray-700 flex items-center gap-4"><FaPhoneVolume className="text-orange-600 text-2xl" />Phone</h3>
            <div className="text-sm mt-4 flex flex-col gap-2">
              <div className="flex">
                <span className="font-semibold text-teal-700">Mobile:</span>
                <h5 className="ml-14">
                  (+977) 9841 275897 <br />
                  (+977) 980 5689789
                </h5>
              </div>
              <div>
                <h5 className="font-semibold text-teal-700">Tel: <span className="text-gray-600 ml-32">01-4783972</span></h5>
              </div>
            </div>
          </div>

          {/* Service Time Section */}
          <div className="bg-white shadow-2xs rounded-r-2xl p-6 w-72 border-r-2 border-gray-200">

            <h3 className="font-semibold  gap-2.5 uppercase text-gray-700 flex items-center"><MdOutlineAccessTimeFilled className="text-2xl text-orange-600" />Service Time</h3>

            <div className="text-sm mt-4 space-y-2">
              <h5 className="flex justify-between">
                <span className="font-semibold text-green-600">MON - FRI</span>
                <span className="text-gray-700">8 am - 8 pm</span>
              </h5>
              <h5 className="flex justify-between">
                <span className="font-semibold text-red-500">SAT - SUN</span>
                <span className="text-gray-700">Closed</span>
              </h5>
            </div>
          </div>
        </div>


        {/* This is for map and text box */}

        <div className=" flex bg-gray-50 my-11">


          <div className="">
            <iframe
              width="650px"
              height="800"

              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.481059204379!2d85.34317037525248!3d27.67152297620314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1740633510668!5m2!1sen!2snp"
            ></iframe>
          </div>

          {/* This is for all form section */}

          <div className="max-w-lg mx-32  my-11 bg-white shadow-lg rounded-lg p-8">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-800">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-gray-500 mt-2">
              If you have any queries, send us a message. Our friendly team would love to hear from you.
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4 ">
              {/* Name Fields */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Dropdown */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">What can we do for you</label>
                <select className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Choose</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Phone Number */}
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <span className="p-3 bg-gray-100 flex items-center">
                  🇳🇵 +977
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Button */}
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>


        {/* This is for down */}

        <div className="flex w-full justify-between items-start px-10 py-5">

          {/* Logo and Description Section */}
          <div className="p-11 space-y-2  w-1/3">
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
              <NavLink to="https://www.facebook.com/" target="_blank"> <div className="text-4xl text-gray-400 flex items-center justify-center w-12 h-12"><FaFacebook /></div></NavLink>
              <NavLink to="https://www.linkedin.com/in/laxman-b-ghimire-5948a4312/" target="_blank"><div className="text-4xl text-gray-400 flex items-center justify-center w-12 h-12"><FaLinkedin /></div></NavLink>
              <NavLink><div className="text-4xl flex items-center justify-center w-12 text-gray-400 h-12"><AiFillTwitterSquare /></div></NavLink>
              <NavLink to="https://www.youtube.com/@LaxmanGhimire-gk7co"><div className="text-4xl text-gray-400 flex items-center justify-center w-12 h-12"><FaSquareYoutube /></div></NavLink>
              <NavLink to="https://www.instagram.com/lakxh_ghimire/" ><div className="text-4xl text-gray-400 flex items-center justify-center w-12 h-12"><FaInstagramSquare /></div></NavLink>
              <NavLink><div className="text-4xl flex items-center justify-center text-gray-400 w-12 h-12"><AiFillTikTok /></div></NavLink>
            </div>
          </div>
         
        </div>
        <hr  className="w-7xl text-gray-200 ml-25"/>

        {/* Footer */}

        <div className="text-center p-12">
          <p>Copyright &copy; 2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
        </div>


      </div>


    </>
  )
}

export default Contact
