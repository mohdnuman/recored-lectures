import React, { Component } from 'react';
import {fetchTechCourses,fetchNonTechCourses,fetchSkillBasedCourses} from './actions/courses';
import {connect} from 'react-redux';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTechCourses());
    this.props.dispatch(fetchNonTechCourses());
    this.props.dispatch(fetchSkillBasedCourses());

  }
  
  render() {
    return (
      <Router>
      <div>
        
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={CoursePage} path="/course/:id" dispatch={this.props.dispatch} courses={this.props.courses}/>
          </Switch>
        
      </div>
      </Router>
    );
  }
}
function mapstatetoprops(state){
  return{
    courses:state.courses
  };
}


export default connect(mapstatetoprops)(App);
