import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import { AboutPage, MainPage } from "../pages";
import { classNames } from "../shared/lib/classnames/class-names";
import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";


const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(`app`, undefined, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </React.Suspense>
    </div>
  );
}

export default App;