import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

const Home = () => {
  return (
    <div>
      <Navigation />
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Home;
