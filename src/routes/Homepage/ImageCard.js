import React, { Component } from "react";
import colors from "../../assets/colors";
import { isMobile } from "react-device-detect";
const placeholderImage = require("../../assets/img/placeholder.jpg");

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper} class="col-12 col-md-6 col-xl-4">
        <div class="shadow imageCard">
          <div class="row">
            <div class="col" style={styles.imageCol}>
              <img src={this.props.imageUrl ? this.props.imageUrl : placeholderImage} style={styles.image} />
            </div>
            <div class="col">
              <p style={styles.title}>{this.props.title}</p>
              <p>{this.props.artist}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: 310
  },
  image: {
    height: 280,
    maxWidth: 200
  },
  imageCol: {
    paddingRight: 0,
    marginRight: 0
  },
  title: {
    fontSize: isMobile ? 18 : 22,
    fontWeight: "bold"
  }
};

export default ImageCard;
