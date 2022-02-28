import React, { Component } from "react";
import { LectureCard } from "./";
import { Container } from "@mui/material";

class LecturesList extends Component {
  render() {
    if (this.props.lectures === undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container maxWidth="sm" sx={{margin:'0px', marginTop:'20px',marginLeft:'10vw'}} className="lectures-list">
          {this.props.lectures.map((lecture) => (
            <div>
              <LectureCard lecture={lecture} />
            </div>
          ))}
        </Container>
      );
    }
  }
}

export default LecturesList;
