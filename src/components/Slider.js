import React, { Component } from "react";
import { Container } from "@mui/material";
import { Card } from "./index";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
    };
  }
  showCourses = () => {
    var rows = [];
    let start = this.state.start;
    for (var i = start; i < start + 4&& i<this.props.courses.length; i++) {
      rows.push(<Card key={i} course={this.props.courses[i]} />);
    }
    return <span>{rows}</span>;
  };
  handleNext = () => {
    this.setState({
      start: this.state.start + 4,
    });
  };
  handlePrev=()=>{
    this.setState({
      start:this.state.start-4
    })
  }
  render() {
    if (this.props.courses.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <Container maxWidth="lg" className="slider">

        {this.showCourses()}

        {this.props.courses.length>this.state.start+4&&<img
          className="next-image"
          src="https://cdn-icons-png.flaticon.com/512/318/318476.png"
          onClick={this.handleNext}
        />}

        {this.state.start>0&&<img
          className="prev-image"
          src="https://cdn-icons-png.flaticon.com/512/318/318477.png"
          onClick={this.handlePrev}
        />}
      </Container>
    );
  }
}

export default Slider;