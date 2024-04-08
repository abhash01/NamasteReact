import React from "react";
import { IMG_SRC } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemMenu = ({ item }) => {
  //console.log("itemData", item);
  const dispatch = useDispatch();
  const handleclickAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="ItemHead">
      <div className="ItemName">
        <h2>{item?.card?.info?.name}</h2>
        <p>
          ₹
          {item?.card?.info?.price
            ? item?.card?.info?.price / 100
            : item?.card?.info?.defaultPrice / 100}
        </p>
        <p className="des">{item?.card?.info?.description}</p>
      </div>
      <div className="ItemImg">
        <img src={IMG_SRC + item?.card?.info?.imageId} alt="img" />
        <button onClick={() => handleclickAddItem(item)}>ADD</button>
      </div>
    </div>
  );
};

export default ItemMenu;
