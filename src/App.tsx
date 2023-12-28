import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { AboutPage, MainPage } from "./pages";
import React from "react";
import { Theme, ThemeContext } from "./theme/theme-context";
import { useTheme } from "./theme/use-theme";
import { classNames } from "./helpers/classnames/class-names";


export const App = () => {
  const { theme, toggleTheme } =  useTheme();

  return (
    <div className={classNames(`app`, undefined, [theme])}>
      <div style={{ display: "flex", columnGap: "5px" }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Link to="/main">Main </Link>
        <Link to="/about">About</Link>
      </div>
      <React.Suspense>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}