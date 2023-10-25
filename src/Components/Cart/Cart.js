import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {
  const crtContext = useContext(CartContext);

  let totalAmount = 0;
  crtContext.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });

 
  

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {crtContext.items.map((item) => (
        <li key={item.id} className={classes["cart-item"]} >
          <span>Name: {item.name}</span>
          <span>Price: {item.price}</span>
          <span>Quantity:{item.quantity}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;





