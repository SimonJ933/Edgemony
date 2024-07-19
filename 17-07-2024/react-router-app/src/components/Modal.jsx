import React from "react";

const Modal = ({ isVisible, product, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
        <p className="text-gray-700 mb-4">{product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
