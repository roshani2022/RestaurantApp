import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const crtContext = useContext(CartContext);

  let totalAmount = 0;
  crtContext.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });
  const hasItem = crtContext.items.length > 0;
  const cartItemAddHandler = (item) => {
    crtContext.addItem({
      ...item,
      quantity:item.quantity+1
    })
  }

  const cartItemRemoveHandler  = (id) => {
    crtContext.removeItem(id)
   
  }

  const cartItems = (
   
    <ul className={classes["cart-items"]}>
     
      {crtContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={()=>cartItemRemoveHandler(item.id)}
            
          onAdd = {()=>cartItemAddHandler(item)}
        />
        
      ))}
      
    </ul>
     
  );
  

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && (
          <button className={classes.button}>Order</button>
        )}
        
      </div>
    </Modal>
  );
};
export default Cart;
