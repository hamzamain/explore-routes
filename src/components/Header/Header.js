import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)                                                            }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/friends">Friends</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <p>this is a common property</p>
    </div>
  );
};

export default Header;
