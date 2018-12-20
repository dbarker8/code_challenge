import React, { Component } from "react";
import { PulseLoader } from "react-spinners";

class PageLoadingCover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="text-center" style={styles.container}>
        <div style={styles.insideContainer} class="text-center col-4 offset-4">
          <div style={{ filter: "blur(0px)" }}>
            <PulseLoader color={"white"} />
            <h4 class="text-white">Loading...</h4>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    paddingTop: "30vh",
    position: "fixed",
    height: "100vh",
    zIndex: 2000,
    backgroundColor: "rgba(255,255,255,.6)"
  },
  insideContainer: {
    backgroundColor: "rgba(0,0,0,.3)",
    width: "40%",
    minHeight: 150,
    paddingTop: 50,
    borderRadius: 25
  }
};

export default PageLoadingCover;
