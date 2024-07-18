import React, { useEffect, useState } from "react";
import Modal from "../components/Modal.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded" onClick={() => openModal(product)}>
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && <Modal isVisible={isModalVisible} product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default Home;
