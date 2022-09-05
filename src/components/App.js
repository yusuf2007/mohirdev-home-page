import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "../css/App.css";

const App = () => {
  return (
    <>
      <div className="background-section">
        <div className="container">
          <Navbar className="navbar-settings" />
        </div>
      </div>
      <div className="bottom-section my-4">
        <div className="container">
          <Main />
        </div>
      </div>
      <div className="background-section">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
