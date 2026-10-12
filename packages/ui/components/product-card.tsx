import React from "react";
import type { CatalogProduct } from "../data/catalog";
import { formatPrice } from "../data/catalog";
import { NewBadge } from "./new-badge";
import "./product-card.css";

type ProductCardProps = {
  product: CatalogProduct;
  layout?: "landing" | "listing";
  href?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  layout = "landing",
  href,
}) => {
  const link = href ?? `/products/${product.slug}`;
  const imageClass =
    layout === "listing"
      ? "sc-product-card__image sc-product-card__image--listing"
      : "sc-product-card__image";

  const showInlinePrice = layout === "landing";
  const showRowPrice = layout === "listing";

  return (
    <article className="sc-product-card">
      <a
        href={link}
        className={imageClass}
        style={{ backgroundImage: `url(${product.imageUrl})` }}
        aria-label={product.name}
      />
      <div className="sc-product-card__meta">
        <div className="sc-product-card__badge-slot">
          {product.isNew ? <NewBadge /> : null}
        </div>
        {showRowPrice ? (
          <div className="sc-product-card__row">
            <p className="sc-product-card__name">{product.name}</p>
            <div className="sc-product-card__row">
              {product.price.compareAt ? (
                <p className="sc-product-card__price sc-product-card__price--compare">
                  {formatPrice({ amount: product.price.compareAt })}
                </p>
              ) : null}
              <p
                className={`sc-product-card__price${
                  product.price.compareAt
                    ? " sc-product-card__price--sale"
                    : ""
                }`}
              >
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ) : (
          <>
            <p className="sc-product-card__name">{product.name}</p>
            {showInlinePrice ? (
              <div className="sc-product-card__row">
                {product.price.compareAt ? (
                  <p className="sc-product-card__price sc-product-card__price--sale">
                    {formatPrice(product.price)}
                  </p>
                ) : null}
                {product.price.compareAt ? (
                  <p className="sc-product-card__price sc-product-card__price--compare">
                    {formatPrice({ amount: product.price.compareAt })}
                  </p>
                ) : (
                  <p className="sc-product-card__price">
                    {formatPrice(product.price)}
                  </p>
                )}
              </div>
            ) : null}
          </>
        )}
        {product.cloth ? (
          <p className="sc-product-card__detail">{product.cloth}</p>
        ) : null}
      </div>
    </article>
  );
};
