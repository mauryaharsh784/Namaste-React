
import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * -logo
 * -Nav Item
 * Body
 * -Search
 * -RestructureContainer
 * --restro card
 * ---img
 * ----Name of res star rating 
 * Footer
 * 
 * -Link
 * -Address
 * -Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo-new/deli-sandwich-in-circle-6946ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


// Restaurant Card Component
const RestroCard = (props) => {

  const { resData } = props;

  return (
    <div className="res-card">

      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${resData.info.cloudinaryImageId}`}
        alt={resData.info.name}
      />

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>⭐ {resData.info.avgRating} Star </h4>
      <h4>{resData.info.sla.deliveryTime} min</h4>

    </div>
  );
};


// Swiggy Restaurant Object
const resList = [
  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "175260",
      name: "New Colony Chaap Wale",
      cloudinaryImageId: "zzzbr1id0b5h3tm0odoe",
      locality: "Sector 7",
      areaName: "Sector 7",
      costForTwo: "₹250 for two",
      cuisines: [
        "Chinese",
        "Continental",
        "Beverages"
      ],
      avgRating: 4,
      avgRatingString: "4.0",
      totalRatingsString: "5.6K+",
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "1158284",
      name: "Charcoal Eats - Biryani & Beyond",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/5/96982a9f-eedb-4595-88c9-06877a0e36f5_1158284.JPG",
      locality: "Old Gurgaon",
      areaName: "Old Gurgaon (Zone 6)",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Rolls & Wraps"
      ],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "378",
      sla: {
        deliveryTime: 19,
        slaString: "15-20 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "301418",
      name: "Barbeque Nation",
      cloudinaryImageId: "x1bnynpgagxsy5ihuip9",
      locality: "Sohna Road",
      areaName: "Sohna Road",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Kebabs",
        "Biryani",
        "Street Food",
        "Snacks"
      ],
      avgRating: 3.8,
      avgRatingString: "3.8",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "1135484",
      name: "Khadak Singh Da Dhaba",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/f7a07f85-1263-4afb-9474-2a7ca979672e_1135484.jpg",
      locality: "Old Gurgaon",
      areaName: "Old Gurgaon (Zone 6)",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani"
      ],
      avgRating: 4.0,
      avgRatingString: "4.0",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 28,
        slaString: "25-30 mins"
      }
    }
  },
   {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "1158284",
      name: "Charcoal Eats - Biryani & Beyond",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/5/96982a9f-eedb-4595-88c9-06877a0e36f5_1158284.JPG",
      locality: "Khera Dewat Road",
      areaName: "Old Gurgaon (Zone 6)",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Rolls & Wraps"
      ],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "378",
      sla: {
        deliveryTime: 19,
        slaString: "15-20 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "301418",
      name: "Barbeque Nation",
      cloudinaryImageId: "x1bnynpgagxsy5ihuip9",
      locality: "Sector 47",
      areaName: "Sohna Road",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Kebabs",
        "Biryani",
        "Street Food",
        "Snacks"
      ],
      avgRating: 3.8,
      avgRatingString: "3.8",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "1135484",
      name: "Khadak Singh Da Dhaba",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/f7a07f85-1263-4afb-9474-2a7ca979672e_1135484.jpg",
      locality: "Old Gurgaon (Zone 6)",
      areaName: "Old Gurgaon (Zone 6)",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani"
      ],
      avgRating: 4.0,
      avgRatingString: "4.0",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 28,
        slaString: "25-30 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "1253618",
      name: "Homely",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/6/e5bd8354-19b0-4be2-80a3-5bbdb099cd7b_1253618.jpg",
      locality: "Ansals Corporate Plaza",
      areaName: "Old Gurgaon Zone 6",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "South Indian",
        "North Indian",
        "Desserts"
      ],
      avgRating: 4.0,
      avgRatingString: "4.0",
      totalRatingsString: "171",
      sla: {
        deliveryTime: 29,
        slaString: "25-30 mins"
      }
    }
  },
  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "175260",
      name: "New Colony Chaap Wale",
      cloudinaryImageId: "zzzbr1id0b5h3tm0odoe",
      locality: "Sector 7",
      areaName: "Sector 7",
      costForTwo: "₹250 for two",
      cuisines: [
        "Chinese",
        "Continental",
        "Beverages"
      ],
      avgRating: 4,
      avgRatingString: "4.0",
      totalRatingsString: "5.6K+",
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "1158284",
      name: "Charcoal Eats - Biryani & Beyond",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/5/96982a9f-eedb-4595-88c9-06877a0e36f5_1158284.JPG",
      locality: "Old Gurgaon",
      areaName: "Old Gurgaon (Zone 6)",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Rolls & Wraps"
      ],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "378",
      sla: {
        deliveryTime: 19,
        slaString: "15-20 mins"
      }
    }
  },
  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "175260",
      name: "New Colony Chaap Wale",
      cloudinaryImageId: "zzzbr1id0b5h3tm0odoe",
      locality: "Sector 7",
      areaName: "Sector 7",
      costForTwo: "₹250 for two",
      cuisines: [
        "Chinese",
        "Continental",
        "Beverages"
      ],
      avgRating: 4,
      avgRatingString: "4.0",
      totalRatingsString: "5.6K+",
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins"
      }
    }
  },

  {
    "@type":
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

    info: {
      id: "1158284",
      name: "Charcoal Eats - Biryani & Beyond",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/5/96982a9f-eedb-4595-88c9-06877a0e36f5_1158284.JPG",
      locality: "Old Gurgaon",
      areaName: "Old Gurgaon (Zone 6)",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Rolls & Wraps"
      ],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "378",
      sla: {
        deliveryTime: 19,
        slaString: "15-20 mins"
      }
    }
  },
  
];

//body
// Body Component 

//not using keys (not acceptable) <<< index as key <<<< uniqe id(best practice)
const Body = () => { 
  return ( 
  <div className="body"> 
   <div className="Search"> Search </div> 
   <div className="res-container"> 
    
        {resList.map((restaurant, index) => (
          <RestroCard
            key={`${restaurant.info.id}-${index}`}
            resData={restaurant}
          />
        ))}
    </div> 
    </div> 
    ); 
  };

// Main App Component
const AppLayout = () => {

  return (
    <div className="app">

      <Header />

      <Body />

    </div>
  );
};


// React Root
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<AppLayout />);