"use client";

import { useRouter } from "next/navigation";
import type { MouseEventHandler, ReactNode } from "react";
import styles from "../styles/Button.module.css";

type ButtonVariant = "default" | "back" | "submit" | "language";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  variant = "default",
}: ButtonProps) => {
  const router = useRouter();
  const handleClick =
    onClick ?? (variant === "back" ? () => router.back() : undefined);

  const buttonClassName = [
    styles.button,
    variant === "back" ? styles.back : "",
    variant === "submit" ? styles.submit : "",
    variant === "language" ? styles.language : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};

export default Button;
