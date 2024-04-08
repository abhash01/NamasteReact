import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useProductitems from "../utils/useProductitems";
import ItemCategory from "./ItemCategory";

const ResturantProductdetail = () => {
  const { resID } = useParams();
  const productitems = useProductitems(resID);
  const [showIndex, setShowIndex] = useState(0);

  if (productitems === null) return <Shimmer />;
  const {
    name,
    cuisines,
    locality,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    sla,
  } = productitems?.cards[2]?.card?.card?.info;
  const itemCardsheader =
    productitems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (resHead) =>
        resHead?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="productcontainer">
      <div className="RestaurantHeader_container__2XRhv">
        <div
          className="RestaurantHeader_wrapper__2GTdS RestaurantHeader_marginBottom__1rbfK"
          style={{ display: "flex" }}
        >
          <div className="RestaurantNameAddress_wrapper__24l_g">
            <div>
              <p className="RestaurantNameAddress_name__2IaTv">{name}</p>
              <p className="RestaurantNameAddress_cuisines__mBHr2">
                {cuisines.join(", ")}
              </p>
            </div>
            <div className="RestaurantNameAddress_areaWrapper__3HIxj">
              <p className="RestaurantNameAddress_area__2P9ib">{locality}</p>
            </div>
          </div>
          <button className="RestaurantRatings_wrapper__2294i">
            <span className="RestaurantRatings_avgRating__1TOWY">
              <span className="icon-star"></span>
              <span>{avgRatingString}</span>
            </span>
            <span className="RestaurantRatings_totalRatings__3d6Zc">
              {totalRatingsString}
            </span>
          </button>
        </div>
        <div>
          <div className="RestaurantHeader_marginBottom__1rbfK restAlign">
            <ul className="RestaurantTimeCost_wrapper__3YXF9">
              <li
                className="RestaurantTimeCost_item__2HCUz"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span>{sla?.slaString}</span> <span>{costForTwoMessage}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {itemCardsheader.map((itemheader, index) => (
          <ItemCategory
            key={itemheader?.card?.card?.title}
            data={itemheader?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantProductdetail;
