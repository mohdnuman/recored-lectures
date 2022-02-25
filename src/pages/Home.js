import React, { Component } from "react";
import { Navbar, MiddleBanner, Courses, Trending } from "../components";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MiddleBanner />
        <Courses />
        <Trending />
      </div>
    );
  }
}

export default Home;
