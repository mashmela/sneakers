import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Select from "../primitives/Select";

import "../styles/aboutItem.css";

function ItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.sneakers);

  const [size, setSize] = React.useState(null);
  const [showError, setShowError] = React.useState(false);

  const item = sneakers.find((item) => item.id === id);

  const handleAddItemClick = () => {
    if (!size) {
      setShowError(true);
      return;
    }
    dispatch({ type: "ADD_BAG_ITEM", item: { item, size } });
  };

  const handleSizeSelect = (value) => {
    setSize(value);
    setShowError(false);
  };

  return (
    <div>
      <div className="aboutItem">
        <img src={item.imageUrl} alt="" />
        <div className="aboutItemText">
          <div className="miniTeg">{item.miniTeg}</div>
          <div>
            {item.brand} {item.label}
          </div>
          <div>${item.price}</div>
          <div>
            <Select
              value={size}
              onChange={handleSizeSelect}
              options={item.sizes}
              placeholder="Choose your size"
              errorText="Need to select size"
              showError={showError}
            />
          </div>
          <div onClick={handleAddItemClick} className="button">
            Add to bag
          </div>
          <div className="imagesItems"></div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
