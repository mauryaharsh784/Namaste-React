import RestroCard from "./RestroCard";
import resList from "../utills/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText,setSearchText]=useState("");
 console.log("body render");
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        )
    );

    const json = await data.json();

    const restaurants = json.data.cards
      .filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card.card.card);

    setListOfRestaurants(restaurants);
  };

  // ✅ Loading screen....
  //condition rendering:
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer/>;
  // }

  return (listOfRestaurants.length === 0) ?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
             onChange={(e) =>{ setSearchText(e.target.value)

             }}
            />
          <button onClick={() =>{
            //filter the restorrant data:

          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestroCard
            key={`${restaurant.info.id}-${index}`}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;