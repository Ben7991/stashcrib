import React from "react";
import { clothTiles } from "../data/catalog";
import "./shop-by-cloth.css";

export const ShopByCloth: React.FC = () => (
  <section className="sc-shop-cloth sc-page-pad">
    <header className="sc-shop-cloth__head">
      <p className="sc-eyebrow">Shop by cloth</p>
      <h2 className="sc-heading-2">Start with what it is made of.</h2>
    </header>
    <div className="sc-shop-cloth__grid">
      {clothTiles.map((tile) => (
        <a key={tile.name} href="/shop" className="sc-shop-cloth__tile">
          <div
            className="sc-shop-cloth__image"
            style={{ backgroundImage: `url(${tile.imageUrl})` }}
          />
          <div className="sc-shop-cloth__meta">
            <span>{tile.name}</span>
            <span>{tile.count}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);
