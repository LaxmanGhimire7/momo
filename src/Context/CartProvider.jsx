import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
cartItem:[],
}


const cartReducer = (state, action) => {
    switch (action.type) {
      case "AddToCart": {
        const isExiting = state.cartItem.find((item) => {
          if (item.id == action.payload.id) {
            return item;
          }
        });
        if (isExiting) {
          return state;
        } else {
          const newProducts = [...state.cartItem, { ...action.payload, qty: 1 }];
          alert(action.payload.name);
          return {
            cartItem: newProducts,
          };
        }
      }
  
      case "Increment": {
        const newCartItems = state.cartItem.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        return {
          cartItem: newCartItems,
        };
      }
      case "Decrement": {
        const newCartItems = state.cartItem.map((item) => {
          if (item.id === action.payload.id && item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        return {
          cartItem: newCartItems,
        };
      }
      case "RemovalFromCart": {
        const filteredItems = state.cartItem.filter((item) => {
          return item.id !== action.payload.id;
        });
        return {
          cartItem: filteredItems,
        };
      }
      case "ClearCart": {
        return {
          cartItem: [],
        };
      }
  
      default:
        return state;
    }
  };
  

export const CartProvider = ({children}) =>{
    const [state, dispatch]=useReducer(cartReducer, initialState)
    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

