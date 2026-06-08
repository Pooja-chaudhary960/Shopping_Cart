import React from 'react'
import { createContext, useContext } from 'react'

const CartContext = createContext();
import { initialProducts } from '../data/product'



export const CartProvider = ({children}) => {
  const products = initialProducts;
  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  )
}

export const useCart =() => useContext(CartContext);

