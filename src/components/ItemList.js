import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 flex">
          <div className="bg-white shadow-md rounded-lg p-4 text-left flex justify-between w-full">
            <div className="w-9/12">
              <h3 className="font-bold text-lg py-2">
                {item.card.info.name} - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h3>
              <p className="text-gray-600 text-xs">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="bg-green-500 text-white px-2 py-1 rounded-lg cursor-pointer">
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-28 h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
