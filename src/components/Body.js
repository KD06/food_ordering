import RestaurantCard from "./RestaurantCard";
import { RES_DATA } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    let parsedData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setData(parsedData);
    setFilteredData(parsedData);
  }

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredData = data.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              );
              setFilteredData(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setData(
              filteredData.filter(
                (restaurant) => restaurant.info.avgRating >= 4
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRating}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
