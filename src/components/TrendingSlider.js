import React, { Component } from "react";
import { Container } from "@mui/material";
import { TrendingCard } from "./index";


class TrendingSlider extends Component {
  render() {
    return (
      <Container maxWidth="lg" className="trending-slider">
        <TrendingCard courses={this.props.courses}/>
        <TrendingCard courses={this.props.courses}/>
        <TrendingCard courses={this.props.courses}/>
        <TrendingCard courses={this.props.courses}/>

        <img className="next-trending-image" src="https://cdn-icons-png.flaticon.com/512/318/318476.png"/>

      </Container>
    );
  }
}

export default TrendingSlider;