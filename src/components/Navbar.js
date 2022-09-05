import React from "react";
import { BrandLogo } from "./BrandLogo";
import NavbarSettings from "./NavbarSettings";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <div class="navbar-holder container-fluid p-0">
        <div class="items-2 d-flex align-items-center">
          <BrandLogo />
          <SearchBar />
        </div>
        <NavbarSettings />
      </div>
    </nav>
  );
};

export default Navbar;
