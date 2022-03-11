import React, { Component } from "react";
import { Navbar } from "../components";
import {CourseForm} from '../components';

class CreateCourse extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CourseForm/>
      </div>
    );
  }
}

export default CreateCourse;
