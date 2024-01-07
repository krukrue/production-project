import { classNames } from "shared/lib/classnames/class-names";
import styles from "./navbar.module.scss";
import { AppLink, AppLinkThemes } from "shared/ui/app-link/app-link";
import { ThemeSwitcher } from "widgets/theme-switcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {

  return (
      <div className={classNames(styles["navbar"])}>
        <div className={styles["links"]}>
          <AppLink theme={AppLinkThemes.SECONDARY} className={styles["main-link"]} to="/">Main </AppLink>
          <AppLink theme={AppLinkThemes.SECONDARY} to="/about">About</AppLink>
        </div>
      </div>
  );
}