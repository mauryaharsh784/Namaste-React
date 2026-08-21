import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(false);

  // URL se restaurant ID
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setError(false);
      setResInfo(null);

      const apiUrl =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=" +
        resId;

      console.log("Restaurant ID:", resId);
      console.log("Menu API:", apiUrl);

      const response = await fetch(apiUrl);

      console.log("Status:", response.status);

      const text = await response.text();

      console.log("Response:", text);

      if (!text) {
        console.log("Swiggy returned empty response");
        setError(true);
        return;
      }

      const json = JSON.parse(text);

      console.log("Menu JSON:", json);

      setResInfo(json.data);
    } catch (error) {
      console.error("Fetch Error:", error);
      setError(true);
    }
  };

  // Loading
  if (resInfo === null && !error) {
    return <Shimmer />;
  }

  // Error
  if (error) {
    return (
      <div className="menu">
        <h1>Unable to load restaurant</h1>

        <p>Restaurant ID: {resId}</p>

        <p>
          Swiggy menu data is currently not available.
        </p>

        <button onClick={fetchMenu}>
          Try Again
        </button>
      </div>
    );
  }

  // Restaurant information
  const restaurantInfo = resInfo?.cards
    ?.map((card) => card?.card?.card?.info)
    ?.find((info) => info);

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = restaurantInfo || {};

  // Menu categories
  const menuCards =
    resInfo?.cards
      ?.find(
        (card) =>
          card?.groupedCard?.cardGroupMap?.REGULAR
      )
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu">

      {/* Restaurant Details */}

      <div className="restaurant-header">

        <h1>{name}</h1>

        <p>
          ⭐ {avgRating}{" "}
          {totalRatingsString &&
            `(${totalRatingsString})`}
        </p>

        <p>
          {cuisines?.join(", ")}
        </p>

        <p>
          {costForTwoMessage}
        </p>

        {sla?.slaString && (
          <p>
            🛵 {sla.slaString}
          </p>
        )}

      </div>

      <hr />

      {/* Menu */}

      <h2>Menu</h2>

      {menuCards.length === 0 ? (
        <p>Menu items not available.</p>
      ) : (
        menuCards.map((menuCard, index) => {

          const card = menuCard?.card?.card;

          if (!card?.itemCards) {
            return null;
          }

          return (
            <div
              className="menu-category"
              key={index}
            >

              <h2>
                {card.title} (
                {card.itemCards.length})
              </h2>

              {card.itemCards.map((item) => {

                const info = item?.card?.info;

                if (!info) {
                  return null;
                }

                return (
                  <div
                    className="menu-item"
                    key={info.id}
                  >

                    <div className="menu-item-info">

                      <h3>
                        {info.name}
                      </h3>

                      {info.price && (
                        <h4>
                          ₹{info.price / 100}
                        </h4>
                      )}

                      {info.description && (
                        <p>
                          {info.description}
                        </p>
                      )}

                    </div>

                    <button className="add-btn">
                      ADD
                    </button>

                  </div>
                );
              })}

            </div>
          );
        })
      )}

    </div>
  );
};

export default RestaurantMenu;