import React, { useContext } from "react";
import { IMG_SRC } from "../utils/constant";
import UserContext from "../utils/UserConext";
const ResturantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  sla,
  cuisines,
  areaName,
}) => {
  const data = useContext(UserContext);
  return (
    <div className="card">
      <div className="imgsec">
        <img className="" src={IMG_SRC + cloudinaryImageId} alt="img" />
      </div>
      <div className="detailsec">
        <h4>{name}</h4>
        <div>
          <span className="fa fa-star starcolor"></span>
          <span style={{ marginRight: "10px" }}>{avgRating}</span>
          <span>{sla?.slaString} mins</span>
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
        <p>{data.loggedInUser}</p>
      </div>
    </div>
  );
};
//HOC > Higher Order Component
export const withpromotiomlabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        {/* HOC Higher Order Component <label>Open</label> */}
        <ResturantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
