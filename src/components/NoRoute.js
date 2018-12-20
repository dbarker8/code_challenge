import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class NoRoute extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        {/* <MyNavbar /> */}
        <br />
        <div class="container fadeMeIn py-2 text-center">
          <img src={require("../assets/img/logo-header.png")} height={40} />
          <br />
          <br />
          <p>404</p>
          <h1>Oops, page not found.</h1>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    );
  }
}

export default NoRoute;
