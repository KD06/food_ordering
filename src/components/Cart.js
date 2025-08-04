import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const totalItems = cart.totalQuantity;
  console.log("Cart items:", cart.items);

  const dispatchAction = useDispatch();

  const handleClearCart = () => {
    // Dispatch action to clear the cart
    dispatchAction(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      <div className="w-6/12 mx-auto  my-4 bg-gray-50 shadow-lg p-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 cursor-pointer hover:bg-blue-600"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cart.items.length === 0 && (
          <p className="text-gray-600">Your cart is empty</p>
        )}
        <ItemList items={cart.items} />
      </div>
      {/* {totalItems === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name}</span>
              <span>₹{item.price / 100}</span>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Cart;
