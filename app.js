import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About us</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ name, cuisine, rating }) => {
  return (
    <div className="restaurant-card">
      <img
        alt=""
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/6/dbd91d15-5a52-475c-8365-04ec271e0acd_ddff3434-36b2-4176-b6b3-ccaf723ac764.jpg"
      />
      <h2>{name}</h2>
      <p>Cuisine: {cuisine}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

const resData = [
  {
    name: "Burger King",
    cuisine: "Fast Food",
    rating: "4.5",
  },
  {
    name: "Pizza Hut",
    cuisine: "Italian",
    rating: "4.2",
  },
  {
    name: "Sushi World",
    cuisine: "Japanese",
    rating: "4.8",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for food items..."
        />
      </div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.name}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
