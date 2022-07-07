import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";

function Search({ type, formData, handleInputChange, setData }) {
  return (
    <div className="row justify-content-between align-items-center ">
      <h1 className="col-6">Search properties to {type}</h1>
      <div className="col-6">
        <div className=" input-group">
          <span
            className="input-group-text material-symbols-outlined material-icons"
            id="basic-addon1"
          >
            search
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Street Address , mansion name , area"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="keyword"
            defaultValue=""
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="col-12 d-flex justify-content-between align-items-center bg-white border rounded my-2">
        <div className="form-floating pt-1">
          <p className="text-muted m-0">Location:</p>
          <select
            className="form-select form-select-sm border-0 p-0  "
            id="floatingSelect"
            aria-label="Floating label select"
            name="location"
            defaultValue={formData.location}
            onChange={handleInputChange}
          >
            <option value="1" hidden selected>
              Select location
            </option>
            <option value="All">All locations</option>
            <option value="New York , USA">New York , USA</option>
            <option value="New Delhi , India">New Delhi , India</option>
            <option value="Melbourne , Australia">Melbourne , Australia</option>
            <option value="London , United Kingdom">
              London , United Kingdom
            </option>
          </select>
        </div>
        <div className="d-flex" style={{ height: "50px" }}>
          <div className="vr"></div>
        </div>

        <div className="form-floating pt-1">
          <p className="text-muted mb-2">When:</p>
          <DatePicker
            type="date"
            className="form-control"
            id="floatingInputValue"
            selected={formData.date}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            onChange={(date) => {
              setData({ ...formData, date: date });
            }}
            scrollableYearDropdown
          />
        </div>
        <div className="d-flex" style={{ height: "50px" }}>
          <div className="vr"></div>
        </div>
        <div className="form-floating pt-1">
          <p className="text-muted m-0">Price Range:</p>
          <select
            className="form-select form-select-sm border-0 p-0  "
            id="floatingSelect"
            aria-label="Floating label select"
            name="price"
            defaultValue={formData.price}
            onChange={handleInputChange}
          >
            <option value="1" hidden selected>
              Select price:
            </option>
            <option value="All">All prices</option>
            <option value="500-2500">$500-$2500</option>
            <option value="2500-6500">$2500-$6500</option>
            <option value="6500-20000">$6500-$20000</option>
          </select>
        </div>
        {/* <div className="form-floating pt-1">
            <p className="text-muted m-0">Price Range:</p>
            <select
              className="form-select form-select-sm border-0 p-0 "
              id="floatingSelect"
              aria-label="Floating label select example"
              name="price"
              defaultValue={formData.price}
              onChange={handleInputChange}
            >
              <option value="1" hidden selected>
                Price range
              </option>
              <option value="All">All prices</option>
              <option value="500-2500">$500-$2500</option>
              <option value="2500-6500">$2500-$6500</option>
              <option value="6500-20000">$6500-$20000</option>
            </select>
          </div> */}
        <div className="d-flex" style={{ height: "50px" }}>
          <div className="vr"></div>
        </div>

        <div className="form-floating pt-1">
          <p className="text-muted m-0">Property type:</p>
          <select
            className="form-select form-select-sm border-0 p-0"
            id="floatingSelect"
            aria-label="Floating label select example"
            name="type"
            defaultValue={formData.type}
            onChange={handleInputChange}
          >
            <option value="1" hidden selected>
              Type
            </option>
            <option value="All">Any type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
