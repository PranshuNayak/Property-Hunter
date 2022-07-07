import React from "react";
import { useState } from "react";
import { data } from "../../data/Data";
import Card from "./Card";
import uuid from "react-uuid";
import Search from "../Search/Search";
import _ from "lodash";

function PropertyRent() {
  const [property, setProperty] = useState(data);

  const initialState = {
    keyword: "",
    location: "All",
    date: new Date(),
    price: "All",
    type: "All",
  };
  const [formData, setData] = useState(initialState);
  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setData({ ...formData, [name]: value });
  };

  const compare = (a, b) => {
    const address = (a.address + a.name + a.area).toLowerCase();

    if (!address.includes(b.keyword.toLowerCase())) return false;
    //location comparison
    if (b.location !== "All" && a.location !== b.location) return false;

    //type comparison
    if (b.type !== "All" && a.type !== b.type) return false;

    //date comparison
    if (b.date !== "All") {
      let arrival = Date.parse(b.date);
      let available = Date.parse(a.date);
      if (arrival < available) return false;
    }

    //price comparision
    if (b.price !== "All") {
      const priceRange = b.price.split("-");
      let lower = Number(priceRange[0]);
      let upper = Number(priceRange[1]);
      if (a.price < lower || a.price > upper) return false;
    }
    return true;
  };

  return (
    <div className="row justify-content-evenly align-items-center">
      <div className="col-12">
        <Search
          type="buy"
          formData={formData}
          handleInputChange={handleInputChange}
          setData={setData}
        />
      </div>
      {property
        .filter((property) => {
          if (compare(property, formData))
            return property;
        })
        .map((property) => (
          <div className="col-4 my-2" key={uuid()}>
            <Card property={property} />
          </div>
        ))
        
        }
    </div>
  );
}

export default PropertyRent;
