import React from "react";
import type { CatalogProduct } from "../data/catalog";
import { ProductCard } from "./product-card";
import "./new-this-week.css";

type NewThisWeekProps = {
  products: CatalogProduct[];
};

export const NewThisWeek: React.FC<NewThisWeekProps> = ({ products }) => (
  <section className="sc-new-week sc-page-pad">
    <header className="sc-new-week__head">
      <h2 className="sc-heading-2">New this week</h2>
      <a href="/shop" className="sc-link-underline">All new</a>
    </header>
    <div className="sc-new-week__grid">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} layout="landing" />
      ))}
    </div>
  </section>
);
