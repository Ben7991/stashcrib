import React from "react";
import type { CatalogProduct } from "../data/catalog";
import { ProductCard } from "./product-card";
import "./listing-catalog.css";

type ListingCatalogProps = {
  products: CatalogProduct[];
};

const chips = [
  { label: "All", count: 18, active: true },
  { label: "Outerwear", count: 7 },
  { label: "Shirting", count: 8 },
  { label: "Knitwear", count: 3 },
];

const editorialImage =
  "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSND4PNDK6WQVKE40VN.png";

export const ListingCatalog: React.FC<ListingCatalogProps> = ({ products }) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 6);

  return (
    <section className="sc-listing">
      <header className="sc-listing__head">
        <div>
          <p>Home / New</p>
          <h1 className="sc-heading-2">New arrivals</h1>
        </div>
        <p className="sc-listing__intro">
          Eighteen pieces in wool, cotton drill, and merino. Added every Thursday.
        </p>
      </header>

      <div className="sc-listing__toolbar">
        <div className="sc-listing__chips">
          {chips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              className={`sc-listing__chip${
                chip.active ? " sc-listing__chip--active" : ""
              }`}
            >
              {chip.label}
              <span>{chip.count}</span>
            </button>
          ))}
        </div>
        <div className="sc-listing__refine">
          <span>Cloth ▾</span>
          <span>Size ▾</span>
          <span>Price ▾</span>
          <span className="sc-listing__divider" />
          <span>Sort</span>
          <strong>Newest ▾</strong>
        </div>
      </div>

      <div className="sc-listing__rows">
        <div className="sc-listing__row">
          {firstRow.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              layout="listing"
            />
          ))}
        </div>
        <div className="sc-listing__row">
          <article className="sc-listing__editorial">
            <div
              className="sc-listing__editorial-image"
              style={{ backgroundImage: `url(${editorialImage})` }}
            />
            <div className="sc-listing__editorial-meta">
              <div>
                <p className="sc-eyebrow">The workroom</p>
                <p>Horn buttons, sewn by hand in Porto.</p>
                <p className="sc-listing__intro">
                  Free repair for two years on every piece.
                </p>
              </div>
              <a href="#" className="sc-link-underline">Read more</a>
            </div>
          </article>
          {secondRow.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              layout="listing"
            />
          ))}
        </div>
      </div>

      <div className="sc-listing__pager">
        <p>Showing 6 of 18</p>
        <div className="sc-listing__progress">
          <span />
        </div>
        <button type="button" className="sc-btn sc-btn--ghost" style={{ width: 240 }}>
          Show 12 more
        </button>
      </div>
    </section>
  );
};
