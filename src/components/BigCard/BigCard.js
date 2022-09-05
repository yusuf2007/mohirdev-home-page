import React from "react";
import "../../css/App.css";

const BigCard = ({ bigcard }) => {
  return (
    <div className="big-card shadow-sm mt-5">
      <img className="w-100" src={bigcard.img} alt="" />
      <div className="main-info p-2">
        <h5 className="my-3">{bigcard.title}</h5>
        <p className="my-2">{bigcard.desc}</p>
        <div className="info d-flex mt-3">
          <div className="date d-flex">
            <i class="fa-solid fa-calendar"></i>
            <p className="card-info-text ms-2 me-4">{bigcard.date}</p>
          </div>
          <div className="view d-flex">
            <i class="fa-solid fa-eye"></i>
            <p className="card-info-text ms-2">{bigcard.view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
