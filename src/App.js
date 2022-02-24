import React, { Component } from 'react';
import { Navbar,MiddleBanner,Courses,Trending } from './components';


class App extends Component {
  render() {
    return (
      <div id='App'>
        <Navbar />
        <MiddleBanner/>
        <Courses />
        <Trending />
      </div>
    );
  }
}

export default App;