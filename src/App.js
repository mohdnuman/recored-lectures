import React, { Component } from 'react';
import { Navbar,MiddleBanner,Courses,Trending } from './components';
import {fetchTechCourses,fetchNonTechCourses,fetchSkillBasedCourses} from './actions/courses';
import {connect} from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTechCourses());
    this.props.dispatch(fetchNonTechCourses());
    this.props.dispatch(fetchSkillBasedCourses());

  }
  
  render() {
    return (
      <div id='App'>
        <Navbar />
        <MiddleBanner/>
        <Courses/>
        <Trending />
      </div>
    );
  }
}
function mapstatetoprops(state){
  return{
    courses:state.courses
  };
}


export default connect(mapstatetoprops)(App);
