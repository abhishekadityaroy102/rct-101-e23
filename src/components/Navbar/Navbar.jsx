import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Products from "../Products/Products";
import Login from "../../pages/Login";
// use react-router Link or NavLink
// const Link = <a />;
import {Link} from "react-router-dom"
const Navbar = () => {
  const {isAuth,login,logout}=useContext(AuthContext)
  // const Link = <a />;
  return (
    <div>
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">HOME</Link>
      <span data-cy="navbar-cart-items-count">{1}</span>
      <button data-cy="navbar-login-logout-button">{isAuth ? "Logout" :"Login"
      }</button>
    </div>
    <div>{
 (isAuth ? <Products/> :<Login/>)
}</div>
    </div>
  );
};

export default Navbar;
