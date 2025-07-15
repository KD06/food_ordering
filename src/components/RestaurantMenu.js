import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  const { resId } = useParams();
  const fetchRestaurantMenu = async () => {
    // Simulate fetching restaurant menu data
    const data = await fetch(RESTAURANT_API_URL + resId);
    const json = await data.json();
    setMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
        .itemCards
    );
    console.log("#####", menu);
    setRestaurantName(json.data.cards[0].card.card.text);
  };

  return (
    <div className="restaurant-menu">
      <h1>{restaurantName}</h1>
      <h2>Menu</h2>
      <ul>
        {menu?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -- ₹
            {(item.card.info.defaultPrice || item.card.info.price) / 100}
          </li>
        ))}
      </ul>
      {/* Menu items will be rendered here */}
    </div>
  );
};

export default RestaurantMenu;
