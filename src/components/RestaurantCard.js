import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ name, cuisine, rating }) => {
  return (
    <div className="restaurant-card">
      <img alt="image" src={CDN_URL} />
      <h2>{name}</h2>
      <p>Cuisine: {cuisine}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default RestaurantCard;
