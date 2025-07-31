import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menu, restaurantName } = useRestaurantMenu(resId);
  const [displayItemList, setDisplayItemList] = useState(0);
  const { cuisines, costForTwoMessage } = menu[0]?.card?.card || {};
  console.log(menu, restaurantName);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{restaurantName}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage || null}
      </p>
      {menu.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showCategory={index === displayItemList ? true : false}
          setDisplayItem={() => setDisplayItemList(index)}
        ></RestaurantCategory>
      ))}
    </div>
  );
};

export default RestaurantMenu;
