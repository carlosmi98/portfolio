import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { IconBaseProps } from "react-icons";

import styles from "./Button.module.css";

interface ButtonProps {
  texto: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
}

export const Button = ({ texto, to, href, icon, className = "" }: ButtonProps) => {

  const content = (
    <>
      {icon}
      <span>{texto}</span>
    </>
  );

  const buttonClass = `${styles.button} ${className}`.trim();

  if (href) {
    return (
      <a className={buttonClass} href={href}>
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {content}
      </Link>
    );
  }
}

export default Button;