import "./styles/index.scss";
import React from "react";
import { classNames } from "../shared/lib/classnames/class-names";
import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { SideBar } from "widgets/sidebar";


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(`app`, undefined, [theme])}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <div className="page-wrapper">
          <React.Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </React.Suspense>

        </div>
      </div>
    </div>
  );
}

export default App;