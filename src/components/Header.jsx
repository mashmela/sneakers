import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/header.css";

function Header() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.bagItems);

  function handleClickLogo() {
    navigate("/");
  }

  function handleClickBag() {
    navigate("/bag");
  }

  return (
    <div className="header">
      <h1 onClick={handleClickLogo}>Sneakers</h1>
      {/* <div className="menu">
        <div>Sheakers</div>
        <div>Gumshoes</div>
        <div>Slates</div>
      </div> */}
      <div className="menu">
        <div onClick={handleClickBag}>Bag({items.length})</div>
        <div>Log in</div>
      </div>
    </div>
  );
}

export default Header;
