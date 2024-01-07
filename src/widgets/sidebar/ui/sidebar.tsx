import React from 'react';
import { classNames } from "shared/lib/classnames/class-names";
import styles from "./sidebar.module.scss";
import { ThemeSwitcher } from "widgets/theme-switcher";

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
      <div className={styles["switchers"]}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default SideBar;