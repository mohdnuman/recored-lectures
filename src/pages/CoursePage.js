import React, { Component } from "react";
import { fetchCourse } from "../actions/activeCourse";
import { connect } from "react-redux";
import { Navbar } from "../components";
import { Container } from "@mui/material";
import {LecturesList} from '../components/index';

class CoursePage extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchCourse(this.props.match.params.id));
  }

  render() {
    if (this.props.activeCourse.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Navbar />
          <Container
            maxWidth="xl"
            sx={{ bgcolor: "black" }}
            className="course-bg-banner"
          >
            <div className="course-name-page">
              {this.props.activeCourse.name}
              {/* Learn Web Development */}
            </div>
            <div className="course-description">
              {this.props.activeCourse.description}
            </div>
            <Container maxWidth="false" className="course-banner">
              <img
                src={`http://localhost:8000${this.props.activeCourse.avatar}`}
                className="course-banner-image"
                alt="course-photo"
              />
              <button className="add-to-cart-button">ADD TO CART</button>
              <button className="buy-now-button">BUY NOW</button>
            </Container>
          </Container>
          <span className="course-content-heading">
            Course Content
          </span>
          <LecturesList lectures={this.props.activeCourse.lectures}/>
        </div>
      );
    }
  }
}
function mapstatetoprops(state) {
  return {
    activeCourse: state.activeCourse,
  };
}

export default connect(mapstatetoprops)(CoursePage);
