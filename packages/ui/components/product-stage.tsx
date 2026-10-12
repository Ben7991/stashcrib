import React from "react";
import type { CatalogProduct } from "../data/catalog";
import { ProductGallery } from "./product-gallery";
import { ProductPurchasePanel } from "./product-purchase-panel";
import "./product-stage.css";

type ProductStageProps = {
  product: CatalogProduct;
  images: string[];
};

export const ProductStage: React.FC<ProductStageProps> = ({
  product,
  images,
}) => (
  <section className="sc-product-stage">
    <ProductGallery images={images} />
    <ProductPurchasePanel product={product} />
  </section>
);
