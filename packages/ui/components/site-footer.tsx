import React from "react";
import "./site-footer.css";

const promises = [
  {
    title: "Free delivery over $300",
    detail: "2 to 4 working days, tracked",
  },
  {
    title: "Returns within 30 days",
    detail: "Free, by post or at the studio",
  },
  {
    title: "Repair for two years",
    detail: "Buttons and lining kept in stock",
  },
  {
    title: "Made in Porto",
    detail: "One workroom, named on every label",
  },
];

const footerLinks = {
  shop: ["New arrivals", "Outerwear", "Knitwear", "Shirting", "Gift card"],
  help: ["Delivery", "Returns", "Size guide", "Care and repair", "Contact us"],
  studio: [
    "About StashCrib",
    "The workroom",
    "Journal",
    "Stockists",
    "Careers",
  ],
};

export const SiteFooter: React.FC = () => (
  <footer className="sc-site-footer">
    <div className="sc-site-footer__promises">
      {promises.map((item) => (
        <div key={item.title} className="sc-site-footer__promise">
          <strong>{item.title}</strong>
          <span>{item.detail}</span>
        </div>
      ))}
    </div>

    <div className="sc-site-footer__main">
      <div className="sc-site-footer__letter">
        <h2>A letter when the new cloth arrives.</h2>
        <p>
          Four times a year. What we made, what it is made of, and how long it
          will last.
        </p>
        <form className="sc-site-footer__signup" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button type="submit">Sign up</button>
        </form>
        <p className="sc-site-footer__fine-print">
          No more than four emails a year. Unsubscribe in one click.
        </p>
      </div>

      <div className="sc-site-footer__columns">
        <div className="sc-site-footer__column">
          <h3>Shop</h3>
          {footerLinks.shop.map((label) => (
            <a key={label} href="/shop">{label}</a>
          ))}
        </div>
        <div className="sc-site-footer__column">
          <h3>Help</h3>
          {footerLinks.help.map((label) => (
            <a key={label} href="#">{label}</a>
          ))}
        </div>
        <div className="sc-site-footer__column">
          <h3>Studio</h3>
          {footerLinks.studio.map((label) => (
            <a key={label} href="#">{label}</a>
          ))}
        </div>
        <div className="sc-site-footer__column">
          <h3>Visit</h3>
          <p>
            Rua das Flores 112
            <br />
            4050-265 Porto
          </p>
          <p>Tue to Sat, 11 to 7</p>
          <a href="#" className="sc-link-underline">Get directions</a>
        </div>
      </div>
    </div>

    <div className="sc-site-footer__wordmark" aria-hidden>
      <span>StashCrib</span>
    </div>

    <div className="sc-site-footer__legal">
      <nav aria-label="Legal">
        <span>© 2026 StashCrib</span>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
        <a href="#">Accessibility</a>
      </nav>
      <div className="sc-site-footer__legal-meta">
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <span className="sc-site-footer__divider" />
        <span>United States · USD $</span>
      </div>
    </div>
  </footer>
);
