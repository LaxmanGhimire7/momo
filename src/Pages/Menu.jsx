import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Menu() {
  const [product, setProduct] = useState([]);
 
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes")
    response = await response.json()
    console.log(response.recipes)
    setProduct(response.recipes)
  };
  useEffect(()=>{
    getProduct();
  },[])

  return (
    <>
  
    
     
      <div className="p-6">
        {product.length > 0 ? (
          <div className="flex  flex-wrap  gap-5  justify-center">
            {product.map((product) => {
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
   
    </>
  )
}

export default Menu;
