import React, { Component } from "react";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import {createCourse} from '../actions/courses';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class CourseForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            avatar:'',
            description:'',
            category:''

        }
    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        const payload = new FormData();
        for(var x = 0; x<this.state.avatar.length; x++) {
            payload.append('avatar', this.state.avatar[x])
        }
        payload.append("name", this.state.name);
        payload.append("description",this.state.description);
        payload.append("category",this.state.category);
        await this.props.dispatch(createCourse(payload));
        return(
          <Redirect to="/course/hello"/>
      );
        
    }
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleDescription=(e)=>{
        this.setState({
            description:e.target.value
        })
    } 
    handleCategory=(e)=>{
        this.setState({
            category:e.target.value
        })
    } 
    handleAvatar=(e)=>{
        console.log(e.target.files);
        this.setState({
            avatar:e.target.files
        })
    }
  render() {
    return (
      <Container
        maxWidth="xl"
        sx={{ bgcolor: "black" }}
        className="course-bg-banner"
      >
        <div className="course-name-page">Create A Course</div>
        <Container maxWidth="false" className="create-course-banner">
          <form onSubmit={this.handleSubmit}>
            <p className="create-course-label-name">Name of the course</p>
            {/* <input id="name" className="create-course-field" type="text" placeholder="Name of the course" /> */}

            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={this.handleName}/>

            <p className="create-course-label">Description of the course</p>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={this.handleDescription}
            />

            <p className="create-course-label">Category of the course</p>
            <TextField
              id="outlined-basic"
              label="Category"
              variant="outlined"
              onChange={this.handleCategory}
            />

            
            {/* <div> */}
              <label class="form-label" style={{ fontWeight: "700",display:'block',marginBottom:'15px'}}>
                Choose A Course Banner
              </label>
              <input
                class="form-control"
                name="avatar"
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={this.handleAvatar}
                className="upload-button"
              />
            {/* </div> */}
            <button type="submit" className="create-course-button">
              <Fab variant="extended">
                <AddIcon />
                Add Course
              </Fab>
            </button>
          </form>
        </Container>
      </Container>
    );
  }
}
function mapstatetoprops(state){
    return{
      
    };
  }
  
  
  export default connect(mapstatetoprops)(CourseForm);