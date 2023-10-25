import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {

    /* using item*/
    // console.log(item);
    // const existingItem = items.find((cartItem) => cartItem.id === item.id);

    // if (existingItem) {
    //   const updatedItems = items.map((cartItem) => {
    //     if (cartItem.id === item.id) {
    //       return {
    //         ...cartItem,
    //         quantity: Number(cartItem.quantity) + Number(item.quantity),
    //         //price: cartItem.price + item.price,
    //       };
    //     }
    //     return cartItem;
    //   });

    //   setItems(updatedItems);
    // } else {
    //   setItems((prevItems) => [...prevItems, item]);
    // }

 const existingItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

if (existingItemIndex !== -1) {
  // If the item already exists, update its quantity
  const updatedItems = [...items];
  updatedItems[existingItemIndex].quantity += 1;
  setItems(updatedItems);
} else {
  // If the item doesn't exist, add it as a new item
  setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
}

  };
  console.log(items)

  const removeItemFromCartHandler = (id) => {
    console.log(cartContext.items.filter((item) => item.id !== id));
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "Click!!!",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
