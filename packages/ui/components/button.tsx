import React from "react";
import "./button.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => (
  <button
    type={type}
    className={`sc-btn sc-btn--${variant} ${className}`.trim()}
    {...props}
  />
);
