import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ name, cuisine, rating, imageId, cost }) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img alt="image" className="rounded-lg" src={CDN_URL + imageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
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

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
