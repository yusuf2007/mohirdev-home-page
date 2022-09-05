import React, { useState } from "react";
import "../../css/App.css";

const Filter = ({ filter }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="filter rounded-2 shadow-sm mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-100 border-0 p-0 rounded-2 shadow-sm bg-light"
      >
        <div className="fliter d-flex justify-content-between align-items-center p-3">
          <div className="d-flex align-items-center">
            <img className="me-2" src={filter.img} alt="home" />
            <h4 className="main-text m-0">{filter.title}</h4>
          </div>
          <div className={`card-arrow ${isOpen ? "card-arrow-active" : ""}`}>
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </button>
      <div
        className={
          isOpen
            ? "second-filter d-flex flex-column"
            : "second-filter show d-flex flex-column"
        }
      >
        <div className="card-1 p-2 d-flex justify-content-between">
          <h6 className="text-light m-0">{filter.info1}</h6>
          <h6 className="text-light m-0">{filter.num1}</h6>
        </div>
        <div className="card-2 p-2  d-flex justify-content-between">
          <h6 className="text-secondary m-0">{filter.info2}</h6>
          <h6 className="text-secondary m-0">{filter.num2}</h6>
        </div>
        <div className="card-3 p-2  d-flex justify-content-between">
          <h6 className="text-secondary m-0">{filter.info3}</h6>
          <h6 className="text-secondary m-0">{filter.num3}</h6>
        </div>
        <div className="card-4 p-2  d-flex justify-content-between">
          <h6 className="text-secondary m-0">{filter.info4}</h6>
          <h6 className="text-secondary m-0">{filter.num4}</h6>
        </div>
        <div className="card-5 p-2  d-flex justify-content-between">
          <h6 className="text-secondary m-0">{filter.info5}</h6>
          <h6 className="text-secondary m-0">{filter.num5}</h6>
        </div>
      </div>
    </div>
  );
};

export default Filter;
