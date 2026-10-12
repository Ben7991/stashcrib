import React from "react";
import type { CatalogProduct } from "../data/catalog";
import { ProductCard } from "./product-card";
import "./product-stage.css";

type RelatedProductsProps = {
  products: CatalogProduct[];
};

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
}) => (
  <section className="sc-related">
    <h2>Also cut for the weather</h2>
    <div className="sc-related__grid">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} layout="listing" />
      ))}
    </div>
  </section>
);
