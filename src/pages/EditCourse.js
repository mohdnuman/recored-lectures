import React, { Component } from "react";
import { fetchCourse } from "../actions/activeCourse";
import { connect } from "react-redux";
import { Navbar } from "../components";
import { Container } from "@mui/material";
import {LecturesList} from '../components/index';
import {Link} from 'react-router-dom';
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import {createLecture} from '../actions/activeCourse';

class CoursePage extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            video:'',
            

        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const payload = new FormData();
        for(var x = 0; x<this.state.video.length; x++) {
            payload.append('video', this.state.video[x])
        }
        payload.append("name", this.state.name);
        payload.append("courseId",this.props.activeCourse._id);
        console.log(payload);
        console.log(payload.get("courseId"));
        // console.log(this.state.name,this.state.avatar);
        this.props.dispatch(createLecture(payload));
        
    }
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
   
    handleAvatar=(e)=>{
        console.log(e.target.files);
        this.setState({
            video:e.target.files
        })
    }
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
              
            </Container>
          </Container>
          
          <form onSubmit={this.handleSubmit} className="add-lecture-box" style={{paddingLeft:'20px'}}>
          <p  className="add-lecture-heading">
              Add Lecture to Course
          </p>
            <p className="create-course-label">Name of the lecture</p>
            <TextField
              id="outlined-basic"
              label="name"
              variant="outlined"
              onChange={this.handleName}
            />

            <br/>
            {/* <div> */}
              <label class="form-label" style={{ fontWeight: "700" , display:'block',marginBottom:'10px'}}>
                Choose A Video
              </label>
              <input
                class="form-control"
                className="upload-button"
                name="video"
                type="file"
                accept="video/*"
                multiple
                onChange={this.handleAvatar}
                style={{display:'block'}}
              />
            {/* </div> */}
            <br/>

            <button type="submit" className="create-course-button">
              <Fab variant="extended">
                <AddIcon />
                Add Lecture
              </Fab>
            </button>
          </form>
          <span className="edit-course-content-heading">
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
