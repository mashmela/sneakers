import React from "react";

function AddBlock({ miniTeg, price, bigWords }) {
  return (
    <div>
      <div className="miniTeg">{miniTeg}</div>
      <div className="bigWords">{bigWords}</div>
      <div>{price}</div>
    </div>
  );
}

export default AddBlock;
