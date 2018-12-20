import React, { Component } from "react";
import MyNavbar from "../../components/MyNavbar";
import PageLoadingCover from "../../components/PageLoadingCover";
import { isMobile } from "react-device-detect";
import ImageCard from "./ImageCard";
const imagesUrl = "https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(imagesUrl, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "ws-api": "2.1"
      }
    })
    .then(result => result.json())
    .then(result => {
      this.setState({
        loading: false,
        movies: result
      });
    });
  }

  getMovies() {
    return this.state.movies.map((item, index) => {
      return (
        <ImageCard
          imageUrl={`https://d2snwnmzyr8jue.cloudfront.net/${item.artKey}_270.jpeg`}
          title={item.title}
          artist={item.artistName}
        />
      );
    });
  }

  render() {
    return (
      <div class="pageWrapperDiv">
        <MyNavbar />
        {this.state.loading ? <PageLoadingCover /> : null}
        <div style={styles.container} class="container-fluid">
          <div class="row">
            {this.getMovies()}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: 1400,
    padding: isMobile ? 8 : 20
  }
};

export default Homepage;
