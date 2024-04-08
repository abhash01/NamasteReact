import { useEffect, useState } from "react";

const useProductitems = (resID) => {
  const [productitems, setProductitems] = useState(null);
  useEffect(() => {
    fetchApidataProductitem();
  }, []);

  const fetchApidataProductitem = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966085&lng=77.5920743&restaurantId=" +
        resID +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setProductitems(json.data);
  };
  return productitems;
};

export default useProductitems;
