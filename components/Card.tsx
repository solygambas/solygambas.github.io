import type { ReactNode } from "react";
import styles from "../styles/Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
