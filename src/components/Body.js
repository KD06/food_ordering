import RestaurantCard from "./RestaurantCard";
import { RES_DATA } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(RES_DATA);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setData(data.filter((restaurant) => restaurant.rating >= 4.0));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {data.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
