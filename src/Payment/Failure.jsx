import { GiCrossMark } from "react-icons/gi";

function Failure() {
  return (
    <>
      <div className='p-20 w-96 m-auto mt-10'>

        <div className='border-2 shadow-2xl shadow-gray-600 border-red-600 rounded-full h-72 w-72 flex justify-center items-center'>
          <GiCrossMark color='red' size={100} />
        </div>

        <div className='text-center p-3 flex justify-center item-center'>
          <h1 className="text-2xl font-semibold text-red-600">Payment Failed</h1>
        </div>

      </div>
    </>
  )
}

export default Failure
