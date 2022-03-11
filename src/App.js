import React, { Component } from 'react';
import {fetchTechCourses,fetchNonTechCourses,fetchSkillBasedCourses} from './actions/courses';
import {connect} from 'react-redux';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import CreateCourse from './pages/CreateCourse';
import EditCourse from './pages/EditCourse';


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
            <Route exact path="/course/edit/:id" component={EditCourse}/>
            <Route exact path="/course/create" component={CreateCourse}/>
            {/* <Route component={CoursePage} path="/course/:id" dispatch={this.props.dispatch} courses={this.props.courses}/> */}
            <Route path="/course/:id" 
            render={(props)=>{
              return <CoursePage {...props} />
            }}
          />
          
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
