import { CDN_URL_URL } from "../utills/constants";
import { Link } from "react-router-dom";

const RestroCard = ({ resData }) => {
  const { info } = resData;

  return (
    <Link
      to={`/restaurants/${info.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="res-card">

        <img
          className="res-logo"
          src={CDN_URL_URL + info.cloudinaryImageId}
          alt={info.name}
        />

        <h3>{info.name}</h3>

        <h4>{info.cuisines.join(", ")}</h4>

        <h4>{info.costForTwo}</h4>

        <h4>⭐ {info.avgRating} Star</h4>

        <h4>{info.sla.deliveryTime} min</h4>

      </div>
    </Link>
  );
};

export default RestroCard;