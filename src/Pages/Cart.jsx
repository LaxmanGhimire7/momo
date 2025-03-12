import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartProvider";
import { MdDelete } from "react-icons/md";
import { FaHeart, FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
 
  const navigate = useNavigate()

  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    console.log(state); // ✅ Debugging: Check if state is updating
  }, [state]);

  if (!state?.cartItem) {
    return <p>Loading Cart...</p>;
  }

  const totalPrice = state.cartItem.reduce((acc, item) => acc + item.qty * item.caloriesPerServing, 0).toFixed(2);
  const totalItem = state.cartItem.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {state.cartItem.length > 0 ? (
        <div className="max-w-6xl mx-auto bg-white shadow-md p-4 rounded-lg">
          {/* Store Section */}
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="font-semibold text-gray-700">My Store</span>
            </div>
            <button className="text-4xl" onClick={() => dispatch({ type: "ClearCart" })}>
              <CiCircleRemove />
            </button>
          </div>

          {/* Cart Items */}
          {state.cartItem.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              {/* Product Image & Details */}
              <div className="flex items-center space-x-4">
                <input type="checkbox" className="h-4 w-4" />
                <img className="h-20 w-20 object-cover rounded-md" src={item.image} alt={item.name} />
                <div>
                  <h1 className="text-md font-medium text-gray-700">{item.name}</h1>
                  <p className="text-sm text-gray-500">Home-Made, Best-Selling</p>
                  <p className="text-xs text-red-500">Offer Ends at Mar 4 23:59:59</p>
                </div>
              </div>

              {/* Price & Quantity */}
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-orange-500 font-semibold text-lg">Rs. {item.caloriesPerServing}</p>
                  <p className="text-gray-400 text-sm line-through">Rs. 999</p>
                </div>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => item.qty > 1 && dispatch({ type: "Decrement", payload: { id: item.id } })}
                    className="px-3 py-1 text-gray-600"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4">{item.qty}</span>
                  <button
                    onClick={() => dispatch({ type: "Increment", payload: { id: item.id } })}
                    className="px-3 py-1 text-gray-600"
                    aria-label="Increase quantity"
                  >
                    <IoMdAdd />
                  </button>
                </div>
                <div className="flex space-x-3">
                  <button className="text-gray-500 hover:text-red-500 text-xl" aria-label="Add to wishlist">
                    <FaHeart />
                  </button>
                  <button
                    onClick={() => dispatch({ type: "RemovalFromCart", payload: { id: item.id } })}
                    className="text-gray-500 hover:text-red-500 text-2xl"
                    aria-label="Remove from cart"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-gray-700 text-lg">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mt-1">
              <span>Shipping Fee</span>
              <span>Rs. 0</span>
            </div>

            {/* Voucher Input */}
            <div className="flex mt-3">
              <input type="text" placeholder="Enter Voucher Code" className="border p-2 w-full rounded-l-md" />
              <button className="bg-blue-500 text-white px-4 rounded-r-md">APPLY</button>
            </div>

            {/* Totals */}
            <div className="flex justify-between font-semibold text-lg mt-3">
              <span>Total Items</span>
              <span className="text-red-600">{totalItem}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg mt-3">
              <span>Total</span>
              <span className="text-red-500">Rs. {totalPrice}</span>
            </div>

            <button  onClick={()=>{
              navigate('/payment',
                 {state: {totalPrice: totalPrice, totalItem:totalItem}});
            }}
              className="bg-orange-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-orange-600">
              PROCEED TO CHECKOUT ({state.cartItem.length})
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[500px] mt-5 m-auto flex flex-col justify-center items-center">
          <img
            className="w-96"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png?f=webp"
            alt="Empty cart"
          />
          <h1 className="text-2xl">
            Cart Is Empty
            <NavLink to="/menu" className="text-center font-bold text-2xl underline text-red-600">
              Shop Now
            </NavLink>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;