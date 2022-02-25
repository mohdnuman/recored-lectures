import { Construction } from '@mui/icons-material';
import React, { Component } from 'react';

class CoursePage extends Component {
    constructor(props){
        super(props);
        this.state={
            course:{}
        }
    }
    showCourse=()=>{
        let course={}
        for(let i=0;i<this.props.courses.length;i++){
            if(this.props.courses[i]._id===this.props.match.params.id){
                course=this.props.courses[i]
            }
        }
        this.setState({
            course:course
        })
    }
    render() {
        if(this.props.courses.length===0){
            return <div>Loading...</div>
        }
        
        return (
            <div>
                {this.showCourse()}
                {this.state.course.name}
                {this.state.course.decription}
            </div>
        );
    }
}

export default CoursePage;