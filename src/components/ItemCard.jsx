import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/itemCard.css";

function ItemCard({ brand, label, price, imageUrl, id }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/item/" + id);
  }

  return (
    <div onClick={handleClick} className="itemCard">
      <img src={imageUrl} alt="" />
      <div className="nameBrand">{brand}</div>
      <div className="nameLabel">{label}</div>
      <div>${price}</div>
    </div>
  );
}

export default ItemCard;
