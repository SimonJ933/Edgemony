import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (product) => {
    let updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
              <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded" onClick={() => removeFromCart(product)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
