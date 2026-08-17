import { CDN_URL_URL } from "../utills/constants";
const RestroCard = (props) => {

  const { resData } = props;

  return (
    <div className="res-card">

      <img
        className="res-logo"
        src={CDN_URL_URL + resData.info.cloudinaryImageId}
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
 export default RestroCard;