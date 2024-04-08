import React from "react";
import ItemMenu from "./ItemMenu";

const ItemCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);
  const handletoShowItem = (e) => {
    console.log("event", e, e.target.value);
    setShowIndex();
  };
  return (
    <div>
      <div className="categoryHeader">
        <div className="categoryHeadercat" onClick={handletoShowItem}>
          <div>
            <span>{data?.title} </span>
            <span> ({data?.itemCards.length})</span>
          </div>
          <div>
            <span>⬇️</span>
          </div>
        </div>
        {showItem && (
          <div>
            {data?.itemCards.map((menuList) => (
              <ItemMenu key={menuList?.card?.info?.id} item={menuList} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCategory;
