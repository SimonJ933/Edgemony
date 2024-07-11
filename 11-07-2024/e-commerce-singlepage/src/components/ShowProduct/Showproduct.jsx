import React from "react";
import ThumbNail from "../Thumbnail/Thumbnail.jsx";
import ShowBox from "../Showbox/Showbox.jsx";
import styles from "./Showproduct.module.css";
import { useState } from "react";
const products = [
  {
    id: self.crypto.randomUUID(),
    img: "./src/assets/Images/cover.jpg",
    thumbNail: "./src/assets/Images/back.jpg",
  },
];

function ShowProduct() {
  const [selectedImage, setSelectedImage] = useState(products[0].img);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className={styles.showproduct_container}>
      <ShowBox imgUrl={selectedImage} />

      <div className={styles.thumbnail_list}>
        {products.map((product) => (
          <ThumbNail key={product.id} thumbNail={product.thumbNail} onClick={() => handleThumbnailClick(product.thumbNail)} />
        ))}
      </div>
    </div>
  );
}

export { ShowProduct };
