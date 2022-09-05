import React, { useState } from "react";
import Call from "../images/call.png";
import Gmail from "../images/gmail.png";
import GB from "../images/gb.png";

const Footer = () => {
  return (
    <div className="footer pt-4">
      <div className="footer-top d-flex justify-content-between">
        <div className="info">
          <h4 className="m-0 mb-3 text-light">Corporate</h4>
          <p className="text-light">About US</p>
          <p className="text-light">Human Resources</p>
          <p className="text-light">News</p>
          <p className="text-light">Contact US</p>
        </div>
        <div className="info">
          <h4 className="m-0 mb-3 text-light">Our Services</h4>
          <p className="text-light">Doping</p>
          <p className="text-light">Secure Trade</p>
          <p className="text-light">Secure e-Trade (SeT)</p>
          <p className="text-light">Bulk Product Upload</p>
          <p className="text-light">Advertising</p>
          <p className="text-light">Sahibinden Native Ad</p>
          <p className="text-light">Mobile</p>
        </div>
        <div className="info">
          <h4 className="m-0 mb-3 text-light">Stores</h4>
          <p className="text-light">Why Should I Open a Store?</p>
          <p className="text-light">Open Store</p>
        </div>
        <div className="info">
          <h4 className="m-0 mb-3 text-light">Privacy and Use</h4>
          <p className="text-light">Secure e-Trade Tips</p>
          <p className="text-light">Agreements and Rules</p>
          <p className="text-light">Membership Agreement</p>
          <p className="text-light">Terms of Use</p>
          <p className="text-light">Site Map</p>
          <p className="text-light">Personal Data Protection</p>
          <p className="text-light">Help and Operation Guide</p>
        </div>
        <div className="info">
          <h4 className="m-0 mb-3 text-light">Follow Us</h4>
          <p className="text-light">Facebook</p>
          <p className="text-light">Twitter</p>
          <p className="text-light">Linkedin</p>
          <p className="text-light">Instagram</p>
          <p className="text-light">Youtube</p>
        </div>
      </div>
      <div className="bottom mt-5">
        <div className="bottom-info d-flex justify-content-between">
          <div className="contact d-flex justify-content-between d-flex">
            <div className="call d-flex">
              <img className="me-3" src={Call} alt="" />
              <div className="call-info">
                <p className="blue-text m-0">Call center</p>
                <h5 className="text-light m-0">998 90 444 00 22</h5>
              </div>
            </div>
            <div className="gmail d-flex">
              <img className="me-3" src={Gmail} alt="" />
              <div className="gmail-info">
                <p className="blue-text m-0">Help centr</p>
                <h5 className="text-light m-0">e’lon@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="language d-flex justify-content-between align-items-center p-2">
            <img className="flag" src={GB} alt="" />
            <p className="text-light m-0">English</p>
            <i class="fa-solid fa-angle-down flag-arrow"></i>
          </div>
        </div>
        <p className="copyright m-0 py-3">Copyright © 2000-2021 e’lon.uz</p>
      </div>
    </div>
  );
};

export default Footer;
