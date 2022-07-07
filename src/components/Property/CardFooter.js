import React from "react";


function CardFooter({ data }) {
  return (
    <ul className="list-group list-group-horizontal list-group-flush justify-content-evenly py-2">
      <li className="list-group-item text-muted d-flex align-items-center p-0 ">
        <span className="d-inline-blocks mx-1  material-icons material-symbols-outlined">
          single_bed
        </span>
        <span> {data.beds} beds</span>
      </li>
      <li className="list-group-item text-muted d-flex align-items-center p-0  ">
        <span className="d-inline-blocks mx-1  material-icons material-symbols-outlined">
          bathtub
        </span>
        <span> {data.bathrooms} bathrooms</span>
      </li>
      <li className="list-group-item text-muted d-flex align-items-center p-0  ">
        <span className="d-inline-blocks mx-1  material-icons material-symbols-outlined">
          area_chart
        </span>
        <span>
          {data.area} m<sup>2</sup>{" "}
        </span>
      </li>
    </ul>
  );
}

export default CardFooter;
