import React from 'react';
import { classNames } from "shared/lib/classnames/class-names";
import styles from "./sidebar.module.scss";
import { Button } from "shared/ui/button/button";
import i18n from "shared/config/i18n/i18n";
import { LangSwitcher } from "shared/ui/lang-switcher/lang-switcher";
import { ThemeSwitcher } from "shared/ui";

interface SideBarProps {
  className?: string;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed(s => !s);
  } 


  return (
    <div className={classNames(styles["sidebar"], {[styles["collapsed"]]: collapsed }, [props.className])} >
      <button onClick={onToggle}>Toggle</button>
      <div className={classNames(styles["switchers"])}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}

export default SideBar;