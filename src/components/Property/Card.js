import React from "react";
import _ from "lodash";
import Footer from "./CardFooter";
import Price from "./Price";

function Card({ property }) {
  const footerProperty = _.pick(property, ["beds", "bathrooms", "area"]);
  return (
    <div className="card">
      <img src={property.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <Price price={property.price} />
        <h5 className="card-title">
          <b>{property.name}</b>
        </h5>
        <p className="card-text text-muted">{property.address}</p>
      </div>
      <Footer data={footerProperty} />
    </div>
  );
}

export default Card;
