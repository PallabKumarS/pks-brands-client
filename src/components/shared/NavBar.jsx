import { NavLink } from "react-router-dom";
import user from "../../assets/user.jpg";
import { useEffect, useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { DiSpark } from "react-icons/di";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink
          className="text-lg font-semibold text-orange-400"
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-semibold text-orange-400" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-semibold text-orange-400" to="/cart">
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex align-middle items-center">
          <span className="text-yellow-400">
            <DiSpark className="text-7xl"></DiSpark>
          </span>{" "}
          <span className="text-orange-500 text-2xl">Splash</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end mr-3">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-orange-400"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div>
          <label className="swap swap-rotate">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on">
              <BiSolidMoon className="text-2xl"></BiSolidMoon>
            </div>
            <div className="swap-off">
              <BsSun className="text-2xl"></BsSun>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
