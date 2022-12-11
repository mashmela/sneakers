import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/itemInBag.css";

function ItemInBag({ item, size, removeBagItem }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/item/" + item.id);
  }

  return (
    <div>
      <div className="bagItem">
        <div className="itemInfo">
          <img onClick={handleClick} src={item.imageUrl} alt="" />
          <div className="bagItemText">
            <div>{item.brand}</div>
            <div>{item.label}</div>
            <div>size: {size}</div>
            <div>${item.price}</div>
          </div>
        </div>
        <div onClick={removeBagItem} className="buttonDelete">
          удалить
        </div>
      </div>
    </div>
  );
}

export default ItemInBag;
