"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [productsOnCart, setProductsOnCart] = useState([]);

  const addProductToCart = (product) => {
    //add product to cart with amount of 1
    if (!productsOnCart.some((item) => item.id === product.id)) {
      setProductsOnCart((prev) => [...prev, { ...product, amount: 1 }]);
    } else {
      //update amount of product on cart don't add new product
      const productIndex = productsOnCart.findIndex(
        (item) => item.id === product.id
      );
      const updatedCart = [...productsOnCart];
      updatedCart[productIndex].amount =
        parseInt(updatedCart[productIndex].amount) + 1;
      setProductsOnCart(updatedCart);
    }
  };

  const deleteProduct = (productToDelete) => {
    const updatedCartProducts = productsOnCart.filter(
      (productToBuy) => productToBuy.id !== productToDelete.id
    );
    setProductsOnCart(updatedCartProducts);
  };

  const editProductAmount = (productToUpdate, newAmount) => {
    const productIndex = productsOnCart.findIndex(
      (item) => item.id === productToUpdate.id
    );
    const updatedCart = [...productsOnCart];
    updatedCart[productIndex].amount = newAmount;
    setProductsOnCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{
      productsOnCart,
      addProductToCart,
      deleteProduct,
      editProductAmount,
    }}>
      {children}
    </CartContext.Provider>
  );
}
