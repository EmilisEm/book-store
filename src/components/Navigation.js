import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/store">Store</NavLink>
      <NavLink to="/cart">Shoping Cart</NavLink>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </div>
  );
};

export default Navigation;
