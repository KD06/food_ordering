import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(RESTAURANT_API_URL + resId);
    const json = await data.json();
    setMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    setRestaurantName(json.data.cards[0].card.card.text);
  };

  return { menu, restaurantName };
};

export default useRestaurantMenu;
