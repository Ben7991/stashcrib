import React from "react";
import type { CatalogProduct } from "../data/catalog";
import { formatPrice } from "../data/catalog";
import { NewBadge } from "./new-badge";
import "./product-purchase-panel.css";

type ProductPurchasePanelProps = {
  product: CatalogProduct;
};

const pairings = [
  {
    name: "Merino crew",
    detail: "Olive · $168",
    image:
      "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSSS8YXM59MXJ1ESRZG.png",
  },
  {
    name: "Washed cotton shirt",
    detail: "Sand · $148",
    image:
      "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSW2FF185XA26FNDSY7.png",
  },
];

const sizes = ["XS", "S", "M", "L", "XL"];

export const ProductPurchasePanel: React.FC<ProductPurchasePanelProps> = ({
  product,
}) => (
  <div className="sc-product-buy">
    <p className="sc-product-buy__breadcrumb">{product.category}</p>
    {product.isNew ? <NewBadge /> : null}
    <h1 className="sc-product-buy__title">{product.name}</h1>
    <p className="sc-product-buy__price">{formatPrice(product.price)}</p>
    <p className="sc-product-buy__description">{product.detail}</p>

    <div className="sc-product-buy__field">
      <label>Cloth</label>
      <div className="sc-product-buy__swatch">
        <div className="sc-product-buy__swatch-box">
          <span />
        </div>
        <span className="sc-product-buy__description">{product.cloth}</span>
      </div>
    </div>

    <div className="sc-product-buy__field">
      <div className="sc-product-buy__field-head">
        <label>Size</label>
        <a href="#" className="sc-link-underline">Size guide</a>
      </div>
      <div className="sc-product-buy__sizes">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={`sc-product-buy__size${
              size === "M" ? " sc-product-buy__size--active" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    <div className="sc-product-buy__field">
      <div className="sc-product-buy__field-head">
        <label>Fit</label>
        <span className="sc-product-buy__description">
          Model is 186 cm, wears M
        </span>
      </div>
      <div className="sc-product-buy__fit-scale" aria-hidden>
        <span />
        <span />
        <span />
        <span className="is-active" />
        <span />
      </div>
      <div className="sc-product-buy__fit-labels">
        <span>Close</span>
        <span>True to size</span>
        <span>Relaxed</span>
      </div>
    </div>

    <div className="sc-product-buy__purchase">
      <div className="sc-product-buy__stepper" aria-label="Quantity">
        <button type="button" aria-label="Decrease quantity">−</button>
        <span>1</span>
        <button type="button" aria-label="Increase quantity">+</button>
      </div>
      <button type="button" className="sc-btn sc-btn--primary sc-product-buy__add">
        Add to bag
      </button>
    </div>

    <div className="sc-product-buy__promises">
      <div>
        <span>Free delivery over $300</span>
        <span>Arrives Thu 15 Oct</span>
      </div>
      <div>
        <span>Returns within 30 days</span>
        <span>Free, by post or in store</span>
      </div>
      <div>
        <span>Repair for two years</span>
        <span>Included</span>
      </div>
    </div>

    <div className="sc-product-buy__accordion">
      <button type="button">
        Details <span>−</span>
      </button>
      <p>
        100% wool face. Unlined sleeve. Horn buttons. Dry clean. Made in
        Portugal.
      </p>
      <button type="button">
        Shipping and returns <span>+</span>
      </button>
    </div>

    <div className="sc-product-buy__pairings">
      <h3>Wear it with</h3>
      {pairings.map((item) => (
        <div key={item.name} className="sc-product-buy__pairing">
          <div
            className="sc-product-buy__pairing-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="sc-product-buy__pairing-meta">
            <p>{item.name}</p>
            <span>{item.detail}</span>
          </div>
          <button type="button" className="sc-product-buy__pairing-add">
            Add
          </button>
        </div>
      ))}
    </div>
  </div>
);
