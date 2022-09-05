import React from "react";
import "../css/App.css";

const Searchbar2 = () => {
  return (
    <div className="search2 d-flex justify-content-between">
      <div className="input">
        <input type="text" placeholder="Qidiruv" />
      </div>
      <div className="settings d-flex align-items-center justify-content-between h-100">
        <i class="fa-solid fa-xmark m-0"></i>
        <button className="btn-setting-3">E’lon berish</button>
      </div>
    </div>
  );
};

export default Searchbar2;
