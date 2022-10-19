import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenuToggle = () => {
    setOpen((prev) => !prev );
  };
  const activeClassName = {
    backgroundColor: "white",
    padding: "1px 7px 3px 7px",
    borderRadius: "5px",
    color: "black",
  };
  return (
    <nav className="flex justify-between items-center h-[70px] ">
      <div>
        <img src={logo} alt="logo" className="h-[2rem]" />
      </div>
      <div className="hidden md:block">
        {" "}
        <ul className="flex gap-[1.5rem]">
          <li>
            <NavLink
              to="home"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="feature"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="product"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="client"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Clients
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <img
          src={open ? close : menu}
          alt="menubar"
          onClick={handleMenuToggle}
          className="h-[25px] w-[25px] object-contain cursor-pointer"
        />
          </div>
          <div className={`${open ? 'flex' : 'hidden'} absolute mx-10 p-6 my-5 rounded-lg top-[70px] right-[10px] left-[10px] bottom-[10px] bg-black-gradient gap-[1.5rem] sidebar`}>
          <ul className="mx-auto mt-[50%]">
          <li className="my-3">
            <NavLink
              to="home"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Home
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="feature"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Features
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="product"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Product
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="client"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
              className="text-white"
            >
              Clients
            </NavLink>
          </li>
        </ul>
          </div>
    </nav>
  );
};

export default Navbar;
