import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { useSearchParams } from 'react-router-dom';


function Success() {
  const [search] = useSearchParams();
  const data = search.get("data")
  console.log(data)

  let info = atob(data)
  const paymentData = JSON.parse(info)
  console.log(info)
  console.log(paymentData)

  return (
    <>
      <div className='p-20 w-96 m-auto mt-10'>

        <div className='border-2  shadow-2xl shadow-gray-600 border-green-500 rounded-full h-72 w-72 flex justify-center items-center'>
          <GiCheckMark color='green' size={100} />
        </div>

        <div className='text-center p-3 flex flex-col  justify-center'>
          <h1 className='text-2xl font-semibold text-green-500'>Payment Success</h1>
          <h1>Staus:{paymentData.status}</h1>
          <h1>Total Amount: {paymentData.total_amount}</h1>
          <h1>Transaction Code: {paymentData.transaction_code}</h1>

        </div>
      </div>
    </>
  )
}

export default Success;

