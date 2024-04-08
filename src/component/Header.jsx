import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserConext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //subscribe to the  store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <Title />
      <ul className="nav-item">
        <li>{onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <button
          className="loginbtn"
          onClick={() => {
            loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
          }}
        >
          {loginbtn}
        </button>
        <li>
          <Link to={"/cart"}>cart - {cartItems.length}items</Link>
        </li>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
