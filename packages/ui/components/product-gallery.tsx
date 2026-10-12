import React from "react";
import "./product-gallery.css";
import "./product-stage.css";

type ProductGalleryProps = {
  images: string[];
};

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => (
  <div className="sc-product-gallery">
    {images.map((image, index) => (
      <div
        key={image}
        className="sc-product-gallery__image"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={`Product view ${index + 1}`}
      />
    ))}
  </div>
);
