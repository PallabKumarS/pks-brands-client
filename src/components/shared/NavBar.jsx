import { Link, NavLink } from "react-router-dom";
import userLogo from "../../assets/user.jpg";
import { useContext, useEffect, useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { DiSpark } from "react-icons/di";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink className="text-lg font-semibold ml-2 text-sky-400" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg font-semibold ml-2 text-sky-400"
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-semibold ml-2 text-sky-400" to="/cart">
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
        <Link to="/">
          <div className="flex flex-col md:flex-row items-center">
            <span className="text-lime-400">
              <DiSpark className="text-7xl"></DiSpark>
            </span>{" "}
            <span className="text-sky-500 text-2xl font-semibold">Splash</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={logOut} className="btn btn-sm btn-success">
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-success">Login</button>
          </Link>
        )}
        <div className="dropdown dropdown-end mr-3 ml-3">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="userPhoto"></img>
              ) : (
                <img src={userLogo} alt="" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-sky-400"
          >
            <li>{user ? <a>{user.displayName}</a> : <a>User Name</a>}</li>
          </ul>
        </div>
        <div>
          <label className="swap swap-rotate">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on">
              <BiSolidMoon className="text-2xl text-purple-500"></BiSolidMoon>
            </div>
            <div className="swap-off">
              <BsSun className="text-2xl text-purple-500"></BsSun>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
