import React, { useContext } from "react";
import { useEffect, useState } from "react";
import ResturantCard, { withpromotiomlabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserConext";

function RatedDataList(resturantfliterlist) {
  const data = resturantfliterlist?.filter((res) => {
    return res.info.avgRating > 4;
  });
  return data;
}
const Body = () => {
  // Local State variable - Super powerful variable
  const [searchText, setSearchText] = useState();
  const [listOfResturant, setListOfResturant] = useState([]);
  const [resturantfliterlist, setResturantfliterlist] = useState([]);
  const ResturantcardwithHOC = withpromotiomlabel(ResturantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  // Whenever state variable upadate ,react trigger a reconcilation cycle (re-render the component)
  console.log("boady rendere");

  const FetchApiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966085&lng=77.5920743&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Channing
    setResturantfliterlist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    FetchApiData();
  }, []);
  console.log("data", listOfResturant);
  // Conditional renderning
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Check your internet connection abhash</h1>;
  if (resturantfliterlist.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          placeholder="search"
          className="inputBox"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="button"
          onClick={() => {
            //const data = FilterDataList(searchText, resturantfliterlist);
            const Filtersearchdata = resturantfliterlist.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfResturant(Filtersearchdata);
          }}
        >
          Search
        </button>
        <button
          className="ratedBtn"
          onClick={() => {
            const data = RatedDataList(resturantfliterlist);
            setListOfResturant(data);
          }}
        >
          Top rated resturant
        </button>
        <input
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="resturantlist">
        {listOfResturant.map((res) => {
          return (
            <Link
              key={res.info.id}
              to={"/resturantproductdetail/" + res.info.id}
            >
              {res.info.isOpen ? (
                <ResturantcardwithHOC {...res.info} />
              ) : (
                <ResturantCard {...res.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
