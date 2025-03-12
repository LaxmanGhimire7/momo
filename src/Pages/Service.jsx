import okchef from "../assets/images/okchef.png"
import dinewithus from "../assets/images/dinewithus.png"
import qr from "../assets/images/qr.png"
import privateparty from "../assets/images/privateparty.png"
import dining from "../assets/images/dining.png"

function Service() {
  return (
    <>
      <div className='py-36 flex justify-around '>
        {/* This is for writing section */}
        <div className='space-y-14 ml-11'>
          <h1 className='text-4xl text-green-800 '>Our Services</h1>
          <p className='tracking-widest text-gray-500'>KNOWING OUR CUSTOMERS NEEDS</p>
          <h2 className='font-semibold text-3xl -mt-10'><span className='text-orange-600'>We're more than just momos.</span> <br />
            We're a full-service dining experience.</h2>
        </div>
        <div>
          <img className="h-[500px] -mt-11" src={okchef} alt="" />
        </div>

      </div>



      {/* Dine With Us Banner */}
      <div className=" h-[600px] bg-cover bg-center " style={{ backgroundImage: `url(${dinewithus})` }}>
        <div className=" p-48 space-y-16  ">
          <h1 className="text-white text-4xl font-semibold mt-36">Dine With Us</h1>
          <p className="text-white text-2xl -mt-14  ">
            Enjoy our momos in the comfort of your own home with our delivery services
          </p>
          <button className="-mt-4 px-6 py-3 bg-teal-700 text-white rounded-full text-lg font-medium hover:bg-teal-600 transition">
            Watch the Video
          </button>
        </div>
      </div>

      {/* This is party section */}
      <div className="p-20 flex justify-between items-center">
      {/* Left Section - Text & QR Code */}
      <div className="max-w-lg">
        {/* Icon & Title */}
        <div className="flex items-center space-x-3">
          <img className="h-16" src={privateparty} alt="Private Party" />
          <h1 className="text-2xl font-semibold">Private Party</h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. 
          Leo odio tincidunt ipsum magna lacus viverra tincidunt.
        </p>

        {/* QR Code Section */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h1 className="text-green-700 font-semibold text-lg">Scan the QR code</h1>
            <p className="text-gray-500 text-sm">You can also check about the service</p>
          </div>
          <img className="h-16 w-16" src={qr} alt="QR Code" />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img className="h-96 w-auto object-cover" src={dining} alt="Dining Experience" />
      </div>
    </div>
    </>
  )
}

export default Service
