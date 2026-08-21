import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utills/useOnlineStatus";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  //console.log("body render");

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
    console.log("Swiggy API Response:", json);
    

    const restaurants = json.data.cards
      .filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card.card.card);
     console.log("Restaurants:", restaurants);
    //roginal show all restro:
    setListOfRestaurants(restaurants);

    // Initially show all restaurants
    setFilteredRestaurant(restaurants);
  };
//online status:
  const onlineStatus = useOnlineStatus();

 if (!onlineStatus) {
  return <h1>Looks like you're offline. Please check your connection.</h1>;
}
  // ✅ Loading screen....
  //condition rendering:
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer/>;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              //filter the restorrant data:
              //SarchText

              // int this only search the lower case latter
              // const  fiteredRestaurant=listOfRestaurants.filter((res) => res.info.name.includes(searchText)

              if (searchText.trim() === "") {
                setFilteredRestaurant(listOfRestaurants);
                return;
              }

              // Search from ORIGINAL restaurant list
              const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
             );

            setFilteredRestaurant(filteredRestaurant);
          }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
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