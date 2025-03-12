import circle from "../assets/images/circle.png"
import momo from "../assets/images/momo.png"
import backred from "../assets/images/backred.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import person from "../assets/images/person.png"
// import background from "../assets/images/background.png"
import personbg from "../assets/images/person&bg.png"
import buffmomo from "../assets/images/buffmomo.png"
import bufffrymomo from "../assets/images/bufffrymomo.png"
import buffcmomo from "../assets/images/buffcmomo.png"
import rupees from "../assets/images/rupees.png"
import iperson from "../assets/images/iperson.png"
import { PiPlayCircleBold } from "react-icons/pi";
import qualityfood from "../assets/images/qualityfood.png"
import privateparty from "../assets/images/privateparty.png"
import catering from "../assets/images/catering.png"
import happycustomer from "../assets/images/happycustomer.png"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import logo from "../assets/images/logo.png"
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



function Home() {

   const [product, setProduct] = useState([]);
   const [filterItem, setfilterItem] = useState([]);
   
    const getProduct = async () => {
      let response = await fetch("https://dummyjson.com/recipes")
      response = await response.json()
      console.log(response.recipes)
      setProduct(response.recipes)
    };
    useEffect(()=>{
      getProduct();
    },[])

  const navigate = useNavigate();

  const filterProduct = (pd) =>{
    const filterItem = product.filter((item)=>{
      return item.cuisine==pd
    })
    setfilterItem(filterItem)
  };
  useEffect(() => {
    filterProduct("Indian");
  }, [product]);


  return (

    <>

      <div className=' flex justify-end'>


        <div className=" mr-[600px] space-y-5 p-5 m-14 ">
          <p className="text-sm text-gray-500 ">RESTAURANT</p>

          <h1 className="font-bold text-3xl">The {""}
            <span
              className="h-20   inline-block  bg-contain text-white   w-32 text-center p-2 bg-no-repeat "
              style={{
                backgroundImage: `url(${backred})`
              }}
            >
              #One
            </span>
            <br />
            Momo Restaurant
          </h1>
          <p>
            More than <span className="text-orange-600"> 20+ Varieties</span> of
            momo available for you
          </p>


          <button onClick={() => {
            navigate("/menu")
          }}
            className="bg-teal-700 rounded-3xl text-white p-3 cursor-pointer flex items-center gap-2">Explore Food Menu
            <FaArrowRight /></button>
        </div>

        <div className="relative overflow-hidden w-[350px] flex justify-end ">

          <img className="w-80 mt-8 absolute top-20 right-10  " src={momo} alt="momo" />
          <img className="h-[550px] -mt-9" src={circle} alt="circle" />
        </div>



      </div>

      

      <div className="flex items-center justify-center space-x-12 p-8 ">
        {/* Image Container */}

        <div className=" mr-48">
          <img className="h-[500px] mx-11" src={personbg} alt="" />
        </div>

        {/* Text Content */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold">
            Why Customers <span className="text-orange-600">Love Us</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh fermentum
            vulputate tortor. Egestas facilisi luctus turpis arcu dignissim. Amet neque enim etiam purus id.
            Tortor sit orci blandit cursus turpis.
          </p>
          <button onClick={() => {
            navigate("/about")
          }} className="mt-4 px-6 py-2 gap-2  bg-teal-700 text-white rounded-full flex items-center">
            Explore Our Story  <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>


      {/*  Our Most Populat Dishesh Section */}
      <div>

        <div className="flex flex-col items-center  py-24 ">
          <h1 className="text-3xl font-semibold">Our <span className="text-orange-600">Most Popular</span>  Recipes</h1>
          <br />
          <p className="mt-2 text-gray-500">Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
        </div>

        <div className="flex justify-center -mt-12 gap-6 ">
          <button onClick={()=>{
            filterProduct("Indian")
          }}
           className="border-2 rounded-full px-8 py-2 gap-2 cursor-pointer hover:scale-110">Indian</button>
          <button onClick={()=>{
            filterProduct("Brazilian")
          }}
           className="border-2 border-gray-200 rounded-full cursor-pointer px-8 py-2 gap-2 hover:scale-110">Brazilian</button>
          <button onClick={()=>{
            filterProduct("Italian")
          }}
          className="border-2 border-gray-200 rounded-full cursor-pointer px-8 py-2 gap-2 hover:scale-110">Italian</button>
        </div>

        <div className="p-6">
        {filterItem.length > 0 ? (
          <div className="flex  flex-wrap  gap-5  justify-center">
            {filterItem.map((product) => {
              return (
                <NavLink to={`/productDescription/${product.id}`} key={product.id}>
                <div 
                  className="h-64 w-64 shadow-2xl flex flex-col justify-center items-center rounded-2xl p-4 shadow-black">
                  <img className="h-40 " src={product.image} alt="" />

                  <div className="">
                    <h1 className="">{product.name}</h1>
                    <p className="">Rs.{product.caloriesPerServing}</p>

                    <h3>{product.rating}</h3>
                  </div>
                 </div>
                </NavLink>
              );
            })}
          </div>
        ) : (
          <div>Loading.....</div>
        )}
      </div>

        {/* buff, veg, chicken section

        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center gap-6 ">

            <button className=" border-2 border-gray-200 rounded-full p-4 mx-5 mb-5">
              <FaArrowLeft className=" cursor-pointer " />
            </button>

            <div className="flex justify-center gap-16">
              Buff Momo
              <div className="flex flex-col items-center gap-2">
                <img className="h-36" src={buffmomo} alt="Buff Momo" />
                <h1 className="text-lg font-semibold">Buff Momo</h1>
                <div className="flex items-center gap-1">
                  <img src={rupees} alt="Rupees" className="h-4" />
                  <span className="text-orange-500 font-semibold">150</span>
                </div>
              </div>

              Buff Fry Momo
              <div className="flex flex-col items-center text-center gap-2">
                <img className="h-36" src={bufffrymomo} alt="Buff Fry Momo" />
                <h1 className="text-lg font-semibold">Buff Fry Momo</h1>
                <div className="flex items-center gap-1">
                  <img src={rupees} alt="Rupees" className="h-4" />
                  <span className="text-orange-500 font-semibold">180</span>
                </div>
              </div>

              Buff C. Momo
              <div className="flex flex-col items-center gap-2">
                <img className="h-36" src={buffcmomo} alt="Buff C Momo" />
                <h1 className="text-lg font-semibold">Buff C. Momo</h1>
                <div className="flex items-center gap-1">
                  <img src={rupees} alt="Rupees" className="h-4" />
                  <span className="text-orange-500 font-semibold">200</span>
                </div>
              </div>
            </div>
            <button className=" border-2 border-gray-200 rounded-full p-4 mx-5 mb-5">
              <FaArrowRight className="cursor-pointer  " />
            </button>
          </div>
        </div> */}

        <div className="flex justify-center m-12">
          <button onClick={() => {
            navigate("/menu")
          }} className=" mt-4 px-6 py-2 gap-2  bg-teal-700 text-white rounded-full flex items-center ">
            <h1>Explore Our Menu</h1> <FaArrowRight className="cursor-pointer  " />
          </button>
        </div>
      </div>



      <div className="bg-gray-100 py-1">
        {/* Heading Section */}
        <div className="flex justify-center mt-16 text-3xl font-semibold ">
          <h1>
            <span className="text-orange-600">We Offer People</span> The Service They Want
          </h1>
        </div>

        {/* Hero Section */}
        <div
          className="relative h-[600px] flex items-center  justify-center bg-cover bg-center text-white mt-10"
          style={{
            backgroundImage: `
          url(${iperson})`,
          }}>


          {/* Content */}
          <div className="relative text-center px-6">
            <h1 className="text-4xl font-bold">Process behind the making</h1>
            <p className="mt-2 text-lg">See how only chefs cook only the best momos</p>

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full shadow-lg text-sm font-medium">
                <PiPlayCircleBold size={20} />
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center py-16">
        {/* Service Cards */}
        <div className="flex justify-center items-center gap-20 text-center">
          {/* Quality Food */}
          <div className="flex flex-col items-center w-64">
            <img className="h-20 mb-4" src={qualityfood} alt="Quality Food" />
            <h1 className="text-lg font-bold text-gray-900">Quality Food</h1>
            <p className="text-gray-600 mt-2">
              Only the best food with top quality products and ingredients.
            </p>
          </div>

          {/* Private Party */}
          <div className="flex flex-col items-center w-64">
            <img className="h-20 mb-4" src={privateparty} alt="Private Party" />
            <h1 className="text-lg font-bold text-gray-900">Private Party</h1>
            <p className="text-gray-600 mt-2">
              Get the best food for all your private parties and gatherings.
            </p>
          </div>

          {/* Catering (Fixed Typo) */}
          <div className="flex flex-col items-center w-64">
            <img className="h-20 mb-4" src={catering} alt="Catering" />
            <h1 className="text-lg font-bold text-gray-900">Catering</h1>
            <p className="text-gray-600 mt-2">
              Get the best food for any occasions and gatherings.
            </p>
          </div>
        </div>

        {/* Explore Our Services Button */}
        <div className="mt-10">
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
            Explore Our Services <FaArrowRight className="cursor-pointer  " />
          </button>
        </div>
      </div>


      {/* This section is for Happy Customersssss */}
      <div className="flex justify-around p-20 bg-gray-100">

        <div className="mt-16">
          <h1 className="font-semibold text-3xl">200+ <span className="text-orange-600">Happy Customers</span> </h1>
          <h3 className="font-bold text-teal-600 mt-3">What our customers say about us</h3>

          <p className="italic mt-12 text-2xl">“Only the best momo you can find in the market. <br />
            Different Varieties of momo to choose from. Will be <br />
            visiting again soon”</p>
          <h1 className="mt-5 font-bold text-2xl">Livia Dias</h1>

          <div className="mt-6 flex gap-4">
            {/* Left Arrow Button */}
            <button className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full hover:bg-gray-100">
              <FaArrowLeft className="text-2xl text-gray-700 cursor-pointer" />
            </button>

            {/* Right Arrow Button */}
            <button className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full hover:bg-gray-100">
              <FaArrowRight className="text-2xl text-gray-700 cursor-pointer" />
            </button>
          </div>

        </div>

        {/* This is for image section */}
        <div>
          <img className="h-[500px]" src={happycustomer} alt="" />
        </div>
      </div>



      <div className="p-9 bg-white">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="font-semibold text-2xl">
            Get <span className="text-orange-600">In Touch</span>
          </h1>
          <p className="font-semibold text-teal-700">
            Our Friendly team would love to hear from you
          </p>
        </div>

        {/* Contact Info and Form Section */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Contact Info */}
          <div className="bg-teal-900 text-white p-6 rounded-lg w-80">
            <p className="font-semibold flex items-center gap-2">
              <FaLocationDot /> Our Address
            </p>
            <p className="mb-4">New Baneshwor, Kathmandu, Bagmati, Nepal</p>

            <p className="font-semibold flex items-center gap-2">
              <IoCall /> Our Contacts
            </p>
            <p>Mobile: 9841275897</p>
            <p>Landline: 01-4783972</p>

            <p className="font-semibold mt-4">Our Service Time</p>
            <p>MON - FRI: 10 am - 8 pm</p>
            <p>SAT - SUN: Closed</p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg w-96">
            <div className="flex  flex-col gap-4">
              First Name <input className="p-2 border rounded flex-1" type="text" placeholder="" />
              Last Name<input className="p-2 border rounded flex-1" type="text" placeholder="" />
            </div>
            <input className="p-2 border rounded w-full mt-4" type="email" placeholder="Email" />
            <select className="p-2 border rounded w-full mt-4">
              <option></option>
            </select>
            <input className="p-2 border rounded w-full mt-4" type="tel" placeholder="Phone Number" />
            <textarea className="p-2 border rounded w-full mt-4" placeholder="Message"></textarea>
            <button className="bg-orange-600 text-white px-4 py-2 rounded mt-4 w-full">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* For Location */}

      <div className="mt-11">
        <iframe
          width="1520px"
          height="450"

          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.481059204379!2d85.34317037525248!3d27.67152297620314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1740633510668!5m2!1sen!2snp"
        ></iframe>
      </div>

      {/* About */}
      {/* This is for down */}

      <div className="flex w-full justify-between items-start px-10 py-9">

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
      <div className="p-6 text-center">
        <p>Copyright &copy; 2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
      </div>


    </>
  )
}

export default Home
