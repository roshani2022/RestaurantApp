import React,{useContext} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

import CartContext from '../../../Store/CartContext';
const MealItemForm = (props) => {

  const cartCtx = useContext(CartContext)
  
  const addItemHandler = (event) => {
    event.preventDefault();
    //cartCtx.items.push(props.items)
   // cartCtx.addItem(props.item)
   const quantity = document.getElementById("amount" +props.id).value;
   cartCtx.addItem({...props.item,quantity:quantity})
    console.log("item",props.item)
    
  }

  return (
    <form className={classes.form}>
      {/* {console.log('inside render',cartCtx.items)} */}
      <Input
        label="Amount"
        input={{
          id: "amount" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemHandler}> + Add</button>
    </form>
  );
};
export default MealItemForm;
