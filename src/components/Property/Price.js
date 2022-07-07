import React from "react";

function Price({ price }) {
  const style = {
    favouriteIcon: {
      border: "0.5px solid black",
      borderRadius: "50%",
    },
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="text-primary">
        <span className="h3 ">${price}</span>
        <span>/month</span>
      </div>
      <div
        className="add-to-favourite d-flex p-2 align-items-center justify-content-between"
        style={style.favouriteIcon}
      >
        <span className="material-icons material-symbols-outlined">
          favorite
        </span>
      </div>
    </div>
  );
}

export default Price;
