import React from "react";
import { heroCoatImage } from "../data/catalog";
import "./landing-hero.css";

const categories = [
  {
    label: "Outerwear",
    count: "6 pieces",
    image:
      "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSDJ7WC115338P9KKXH.png",
    active: true,
  },
  {
    label: "Knitwear",
    count: "4 pieces",
    image:
      "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSSS8YXM59MXJ1ESRZG.png",
  },
  {
    label: "Shirting",
    count: "5 pieces",
    image:
      "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSW2FF185XA26FNDSY7.png",
  },
  {
    label: "Rainwear",
    count: "3 pieces",
    image:
      "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSZCB81DK0ZVVAQBTQA.png",
  },
];

export const LandingHero: React.FC = () => (
  <section className="sc-landing-hero">
    <div
      className="sc-landing-hero__media"
      style={{ backgroundImage: `url(${heroCoatImage})` }}
    >
      <div
        className="sc-landing-hero__peek"
        style={{
          backgroundImage:
            "url(https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSSS8YXM59MXJ1ESRZG.png)",
        }}
      />
      <div className="sc-landing-hero__caption">
        <strong>Wool field coat</strong>
        <span>Charcoal · Double-faced wool</span>
      </div>
    </div>

    <div className="sc-landing-hero__copy">
      <div className="sc-landing-hero__top">
        <div className="sc-landing-hero__season">
          <strong>01 OUTERWEAR</strong>
          <span>Autumn / Winter 26</span>
        </div>
        <div className="sc-landing-hero__controls">
          <span>01 / 04</span>
          <div className="sc-landing-hero__arrows">
            <button type="button" aria-label="Previous slide">‹</button>
            <button type="button" aria-label="Next slide">›</button>
          </div>
        </div>
      </div>

      <div className="sc-landing-hero__body">
        <h1>Cut for the weather.</h1>
        <p>
          The field coat in double-faced wool. Unlined through the sleeve, horn
          buttons, charcoal only until the cloth runs out.
        </p>
        <div className="sc-landing-hero__cta">
          <a className="sc-btn sc-btn--primary" href="/products/wool-field-coat">
            Shop the coat — $428
          </a>
          <a className="sc-btn sc-btn--secondary" href="/shop">
            The full edit
          </a>
        </div>
      </div>

      <div className="sc-landing-hero__rails">
        {categories.map((category) => (
          <div key={category.label} className="sc-landing-hero__rail">
            <div
              className={`sc-landing-hero__rail-bar${
                category.active ? " sc-landing-hero__rail-bar--active" : ""
              }`}
            />
            <div className="sc-landing-hero__rail-item">
              <div
                className="sc-landing-hero__thumb"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div>
                <strong>{category.label}</strong>
                <br />
                <span>{category.count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
