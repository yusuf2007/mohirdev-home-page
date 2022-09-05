import React from "react";
import "../../css/App.css";

const Card = ({ card }) => {
  return (
    <div className="col mb-4">
      <div className="card shadow-sm p-0">
        <img src={card.img} alt="" className="w-100" />
        <div className="main-info p-2">
          <div className="info d-flex justify-content-between">
            <div className="date d-flex">
              <i class="fa-solid fa-calendar"></i>
              <p className="card-info-text ms-2">{card.date}</p>
            </div>
            <div className="view d-flex">
              <i class="fa-solid fa-eye"></i>
              <p className="card-info-text ms-2">{card.view}</p>
            </div>
          </div>
          <h6>{card.title}</h6>
          <h5>{card.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
