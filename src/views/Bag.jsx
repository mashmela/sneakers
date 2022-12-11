import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ItemInBag from "../components/ItemInBag";

import "../styles/bag.css";

function Bag() {
  const items = useSelector((state) => state.bagItems);
  const dispatch = useDispatch();

  const removeBagItem = (index) => dispatch({ type: "REMOVE_BAG_ITEM", bagItems: index });

  return items.length > 0 ? (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          {items.map((obj, index) => (
            <ItemInBag {...obj} key={index} removeBagItem={() => removeBagItem(index)} />
          ))}
        </div>
      </div>
      <div className="buttonBought">Оформить заказ</div>
    </div>
  ) : (
    <h2>Bag is empty :(</h2>
  );
}

export default Bag;
