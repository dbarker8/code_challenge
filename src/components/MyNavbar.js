import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../assets/img/logo-header.png";
import colors from "../assets/colors";
import { isMobile } from "react-device-detect";

class MyNavbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-default fixed-top bg-light shadow-sm navbar-light">
        <a class="navbar-brand" style={{ maxWidth: "50%" }}>
          <img src={require("../assets/img/logo-header.png")} style={{ height: 40, marginRight: 20 }} />
        </a>
      </nav>
    );
  }
}

const styles = {
  navbar: {
    marginBottom: 0
  },
  navLink: {
    textDecoration: "none"
  },
  navItem: {
    marginRight: isMobile ? "auto" : 15,
    paddingBottom: isMobile ? 3 : "auto",
    paddingTop: isMobile ? 3 : "auto"
  },
  selectedItem: {
    opacity: 1,
    color: "#000000"
  }
};

export default MyNavbar;
