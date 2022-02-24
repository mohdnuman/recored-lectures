import React, { Component } from "react";
import { Container } from "@mui/material";
import { Card } from "./index";


class Slider extends Component {
  render() {
    return (
      <Container maxWidth="lg" className="slider">
        <Card courses={this.props.courses}/>
        <Card courses={this.props.courses}/>
        <Card courses={this.props.courses}/>
        <Card courses={this.props.courses}/>

        <img className="next-image" src="https://cdn-icons-png.flaticon.com/512/318/318476.png"/>


      </Container>
    );
  }
}

export default Slider;
