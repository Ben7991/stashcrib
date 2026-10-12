import React from "react";
import "./repair-section.css";

const repairImage =
  "https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/01M4QXVSSND4PNDK6WQVKE40VN.png";

const stats = [
  { value: "2 years", label: "Free repair" },
  { value: "10 days", label: "Typical turnaround" },
  { value: "Porto", label: "Same workroom that made it" },
];

export const RepairSection: React.FC = () => (
  <section className="sc-repair sc-page-pad">
    <div
      className="sc-repair__image"
      style={{ backgroundImage: `url(${repairImage})` }}
      role="img"
      aria-label="Repair workroom"
    />
    <div className="sc-repair__copy">
      <p className="sc-eyebrow">Repair</p>
      <h2 className="sc-heading-2">
        Send it back. We mend it free for the first two years.
      </h2>
      <p className="sc-repair__lede">
        Spare horn buttons and lining cloth are kept for every piece we make.
        After two years, repairs are charged at cost.
      </p>
      <div className="sc-repair__stats">
        {stats.map((stat) => (
          <div key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <a href="#" className="sc-link-underline">How repair works</a>
    </div>
  </section>
);
