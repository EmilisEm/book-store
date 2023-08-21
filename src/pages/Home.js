import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <SideMenu />
      <div style={{ padding: "0 2rem" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
