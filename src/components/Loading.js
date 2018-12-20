import React, { Component } from "react";
import { PulseLoader } from "react-spinners";
import Colors from "../assets/colors";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSplash: false
    };
  }
  componentWillMount() {
    setTimeout(() => this.setState({ renderSplash: true }), 500);
  }

  render() {
    let mainRender = this.state.renderSplash ? (
      <div class="col-6 mx-auto text-center" style={{ paddingTop: "30vh" }}>
        <img class="mb-4" src={require("../assets/img/logo-header.png")} height="100" />
        {/* <h2 >Loading</h2> */}
        <PulseLoader color={Colors.main} />
      </div>
    ) : null;

    return mainRender;
  }
}

export default Loading;
