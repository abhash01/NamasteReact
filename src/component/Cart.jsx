import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemMenu from "./ItemMenu";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <div>
        <button onClick={handleClearCart}>Clear cart</button>
      </div>
      <div>
        <div>
          {cartItems.map((item) => (
            <ItemMenu key={item?.card?.info?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
