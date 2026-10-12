import React from "react";
import "./new-badge.css";

export const NewBadge: React.FC = () => (
  <span className="sc-new-badge">
    <span className="sc-new-badge__mark" aria-hidden />
    New
  </span>
);
