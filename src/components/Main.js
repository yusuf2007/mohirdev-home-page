import React, { useState } from "react";
import ReactDOM from "react-dom";
import Searchbar2 from "./Searchbar2.js";
import Slider from "./Slider.js";
import CardList from "./SmallCard/CardList.js";
import FilterList from "./MainFilter/FilterList.js";
import BigCardList from "./BigCard/BigCardList.js";

const Main = (props) => {
  return (
    <>
      <div className="main d-flex">
        <div className="left">
          <FilterList />
        </div>
        <div className="right w-100">
          <Searchbar2 />
          <Slider />
          <h1 className="my-4">Tavsiya etilgan e’lonlar</h1>
          <div className="row p-0">
            <CardList />
          </div>
          <div className="right-bottom mb-4">
            <div className="right-bottom-info d-flex justify-content-between align-items-center pb-3 my-2">
              <h1 className="m-0">Loyihalar</h1>
              <a className="text-decoration-none" href="#">
                Ko‘proq
              </a>
            </div>
            <div className="big-card-holder">
              <BigCardList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
