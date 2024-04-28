import React from "react";
import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker
        <span
          style={{
            color: "var(--blue)",
          }}
        >
          .
        </span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="Dashboard">
          <Button
            outlined={true}
            text={"Dashboard"}
            onClick={() => {
              console.log("abc");
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
