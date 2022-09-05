import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../css/App.css";
import Admin from "../images/Admin.png";
import Mail from "../images/mail.png";
import Bell from "../images/bell.png";
import Star from "../images/star.png";

const NavbarSettings = (props) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="right-section d-flex">
      <div className="icons d-flex align-items-center">
        <ul className="icon-list d-flex align-items-center flex-start w-100 p-0 m-0 ul">
          <li>
            <button
              onClick={() => setIsOpen1(!isOpen1)}
              className={`btn-menu-1 ${isOpen1 ? "btn-menu-1-active" : ""}`}
            >
              <div className={`icon-1 ${isOpen1 ? "icon-1-active" : ""}`}>
                <i className="fa-solid fa-user p-2"></i>
              </div>
            </button>
            {isOpen1 && (
              <div className="sub-menu-1">
                <div className="d-flex justify-content-center align-items-center p-3 user-settings">
                  <div>
                    <img className="img" src={Admin} alt="" />
                  </div>
                  <div>
                    <h6 className="m-0 text-light">Ixtiyorjon Xakimov</h6>
                    <p className="m-0 text-light">
                      ixtiyorjonxakimmov@gmail.com
                    </p>
                  </div>
                </div>
                <div className="sub-menu-1-1 d-flex align-items-center p-3">
                  <i className="fa fa-user user-icon" aria-hidden="true"></i>
                  <p className="user-text m-0">Mening hisobim</p>
                </div>
                <div className="sub-menu-1-2 d-flex align-items-center p-3 exit-button">
                  <i
                    class="fa fa-sign-out sign-out-icon"
                    aria-hidden="true"
                  ></i>
                  <p className="user-text m-0">Tizimdan chiqish</p>
                </div>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => setIsOpen2(!isOpen2)}
              className={`btn-menu-2 ${isOpen2 ? "btn-menu-2-active" : ""}`}
            >
              <div className={`icon-2 ${isOpen2 ? "icon-2-active" : ""}`}>
                <i className="fa-solid fa-envelope p-2"></i>
              </div>
            </button>
            {isOpen2 && (
              <div className="sub-menu-2">
                <div className="mail-1 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Mail} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
                <div className="mail-2 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Mail} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
                <div className="mail-3 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Mail} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
                <div className="mail-4 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Mail} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => setIsOpen3(!isOpen3)}
              className={`btn-menu-3 ${isOpen3 ? "btn-menu-3-active" : ""}`}
            >
              <div className={`icon-3 ${isOpen3 ? "icon-3-active" : ""}`}>
                <i className="fa fa-bell  p-2" aria-hidden="true"></i>
              </div>
            </button>
            {isOpen3 && (
              <div className="sub-menu-3">
                <div className="mail-1 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Bell} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
                <div className="mail-2 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Bell} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
                <div className="mail-3 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Bell} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
                <div className="mail-4 d-flex p-3">
                  <div className="mail-img d-flex align-items-center">
                    <img src={Bell} alt="" />
                  </div>
                  <div className="mail-text">
                    <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                    <p className="mail-small-text m-0">
                      OneSignal announces 500% growth, delivering 2 trillion
                      messages annually.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => setIsOpen4(!isOpen4)}
              className={`btn-menu-4 ${isOpen4 ? "btn-menu-4-active" : ""}`}
            >
              <div className={`icon-4 ${isOpen4 ? "icon-4-active" : ""}`}>
                <i className="fa fa-star p-2" aria-hidden="true"></i>
              </div>
            </button>
            {isOpen4 && (
              <div className="sub-menu-4">
                <div className="star-1 d-flex p-3">
                  <div className="star-img d-flex align-items-center">
                    <img src={Star} alt="" />
                  </div>
                  <div className="star-text">
                    <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                    <p className="star-small-text m-0">
                      joylashgan 5 xonali uy sotiladi
                    </p>
                  </div>
                </div>
                <div className="star-2 d-flex p-3">
                  <div className="star-img d-flex align-items-center">
                    <img src={Star} alt="" />
                  </div>
                  <div className="star-text">
                    <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                    <p className="star-small-text m-0">
                      joylashgan 5 xonali uy sotiladi
                    </p>
                  </div>
                </div>
                <div className="star-3 d-flex p-3">
                  <div className="star-img d-flex align-items-center">
                    <img src={Star} alt="" />
                  </div>
                  <div className="star-text">
                    <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                    <p className="star-small-text m-0">
                      joylashgan 5 xonali uy sotiladi
                    </p>
                  </div>
                </div>
                <div className="star-4 d-flex p-3">
                  <div className="star-img d-flex align-items-center">
                    <img src={Star} alt="" />
                  </div>
                  <div className="star-text">
                    <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                    <p className="star-small-text m-0">
                      joylashgan 5 xonali uy sotiladi
                    </p>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div>
        <button className="btn-setting-2 p-1">E’lon berish</button>
      </div>
    </div>
  );
};

export default NavbarSettings;
