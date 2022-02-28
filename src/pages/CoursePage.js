import React, { Component } from 'react';
import {fetchCourse} from '../actions/activeCourse';
import {connect} from 'react-redux';


class CoursePage extends Component {
    constructor(props){
        super(props);
        this.state={
            course:{}
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchCourse(this.props.match.params.id));
    }
    

    render() {
        if(this.props.activeCourse.length===0)
        {
            return <div>Loading...</div>
        }
        else{
        return (
            <div>
                {this.props.activeCourse.name}
                {this.props.activeCourse.description}
                
            </div>
        );
        }
    }
}
function mapstatetoprops(state){
    return{
      activeCourse:state.activeCourse
    };
  }
  
  
  export default connect(mapstatetoprops)(CoursePage);