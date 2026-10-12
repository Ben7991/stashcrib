import React from "react";
import "./site-header.css";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden>
    <circle
      cx="9"
      cy="9"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M13.5 13.5L18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
    <path
      d="M4 8H20L19 21H5L4 8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 10V6.5A3.5 3.5 0 0 1 15.5 6.5V10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const SiteHeader: React.FC = () => (
  <header className="sc-site-header">
    <div className="sc-site-header__bar">
      <a href="/" className="sc-site-header__logo">
        <span className="sc-site-header__mark">SC</span>
        <span className="sc-site-header__wordmark">StashCrib</span>
      </a>

      <label className="sc-site-header__search">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search coats, knitwear, cloth…"
          aria-label="Search catalogue"
        />
        <span className="sc-site-header__kbd">⌘K</span>
      </label>

      <div className="sc-site-header__actions">
        <div className="sc-site-header__theme" role="group" aria-label="Theme">
          <button type="button" aria-pressed="true" aria-label="Light mode">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <rect
                x="1.5"
                y="2.5"
                width="13"
                height="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <path
                d="M5 14H11M8 11.5V14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              />
            </svg>
          </button>
          <button type="button" aria-pressed="false" aria-label="System theme">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <circle
                cx="8"
                cy="8"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <path
                d="M8 1V2.5M8 13.5V15M1 8H2.5M13.5 8H15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              />
            </svg>
          </button>
          <button type="button" aria-pressed="false" aria-label="Dark mode">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <path
                d="M13.5 9.5A6 6 0 0 1 6.5 2.5A6 6 0 1 0 13.5 9.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <a href="/cart" className="sc-site-header__cart" aria-label="Cart, 2 items">
          <CartIcon />
          <span className="sc-site-header__cart-count">2</span>
        </a>
      </div>
    </div>
  </header>
);
