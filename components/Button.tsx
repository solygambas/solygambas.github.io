"use client";

import type { MouseEventHandler, ReactNode } from "react";
import LinkComponent from "./Link";
import styles from "../styles/Button.module.css";

type ButtonVariant = "default" | "secondary" | "language";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  href?: string;
}

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  variant = "default",
  href,
}: ButtonProps) => {
  const buttonClassName = [
    styles.button,
    variant === "secondary" ? styles.secondary : "",
    variant === "language" ? styles.language : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href !== undefined) {
    return (
      <LinkComponent href={href} className={buttonClassName}>
        {children}
      </LinkComponent>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};

export default Button;
