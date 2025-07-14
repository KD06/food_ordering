import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ name, cuisine, rating, imageId, cost }) => {
  return (
    <div className="restaurant-card">
      <img alt="image" src={CDN_URL + imageId} />
      <h2>{name}</h2>
      <p>
        <b>Cuisine:</b> {cuisine}
      </p>
      <p>{cost}</p>
      <p>
        <b>Rating:</b> {rating}
      </p>
    </div>
  );
};

export default RestaurantCard;
