import React from 'react';
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classnames/class-names";
import styles from "./app-link.module.scss";

export enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkThemes;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkThemes.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} {...otherProps} className={classNames(styles["app-link"], {}, [className, styles[theme]])}>
      {children}
    </Link>
  );
}