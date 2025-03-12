import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { FcRating } from "react-icons/fc";
import { CartContext } from '../Context/CartProvider';

function ProductDescription() {
  const navigate = useNavigate()
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [ingredients, setIngredient] = useState([]);
  const [instructions, setInstruction] = useState([]);
  const getProduct = async () => {
    let response = await fetch(`https://dummyjson.com/recipes/${id}`)
    response = await response.json();
    // console.log(response)
    setProduct(response);
    setIngredient(response.ingredients)
    setInstruction(response.instructions)
  }
  useEffect(() => {
    getProduct()
  }, [id]);

  return (
    <>
      ProductDescription
      {product ? (
        <div className=' flex gap-7 p-7'>
          <div>
            <img className="h-52 " src={product.image} alt="" />
          </div>
          <div className=' '>

            <h1>{product.name}</h1>

            <p className='text-orange-600 font-bold'>Rs.{product.caloriesPerServing}</p>

            <p className='flex items-center gap-1.5 '> <FcRating className='' /> {product.rating}</p>


            <div className='space-x-5 my-4 text-white'>
              <button onClick={()=>{
              navigate('/payment',
                 {state: {totalPrice: product.caloriesPerServing, totalItem:1}});
            }}
                className='bg-blue-700 p-2 w-40'>Buy Now</button>


              <button onClick={() => {
                dispatch({ type: "AddToCart", payload: product });
              }} className='bg-orange-600 p-2 w-40 hover:scale-110'>Add To Cart</button>
            </div>

          </div>

        </div>
      ) : (
        <div>Product Not Found </div>
      )}

      {/* This section is for instruction and others */}
      <div className='flex'>
        <h1>Instruction</h1>
        <div>

          {
            instructions.length > 0 ? (<div>

              {instructions.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                )
              })}

            </div>
            ) : (<div>
              Loading....
            </div>
            )
          }
        </div>

        <div>
          <h1>Ingredients</h1>
          <div>
            {ingredients.length > 0 ? (<div>
              {ingredients.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                )
              })}
            </div>) : (<div>Loading.......</div>)
            }
          </div>
        </div>
      </div>

    </>

  )
}

export default ProductDescription
