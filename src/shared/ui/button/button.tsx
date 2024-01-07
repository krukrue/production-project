import { Theme } from "app/providers/theme-provider/lib/theme-context";
import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from "../../lib/classnames/class-names";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: Theme;
}

export const Button: React.FC<ButtonProps> = (props) => {
  
  const { className, children, ...otherProps } = props;
  
  return (
    <button className={classNames(styles["button"], {}, [className, styles["clear"]])} {...otherProps}>
      {children}
    </button>
  );
}