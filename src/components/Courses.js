import React, { Component } from "react";
import { Container } from "@mui/material";
import Slider from "./Slider";


class Coures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:'tech',
    };
  }
  handleNonTech=()=>{
      this.setState({
          active:'nontech'
      })
  }
  handleTech=()=>{
      this.setState({
          active:'tech'
      })
  }
  handleSkillBased=()=>{
      this.setState({
          active:'skillbased'
      })
  }
  isActive=(element)=>{
      if(element===this.state.active){
        return 'active';
      }
      else{
          return 'default';
      }
    
  }
  render() {
    return (
      <Container maxWidth="lg" className="courses">
        <div className="course-names"><span onClick={this.handleTech} className={this.isActive('tech')}>Tech</span> <span onClick={this.handleNonTech} className={this.isActive('nontech')}>Non Tech</span> <span className={this.isActive('skillbased')} onClick={this.handleSkillBased}>Skill Based</span></div>
        {this.state.active==='tech'&&<Slider courses={{name:'c++'}}/>}
        {this.state.active==='nontech'&&<Slider courses={{name:'french'}}/>}
        {this.state.active==='skillbased'&&<Slider courses={{name:'marketing'}}/>}

      </Container>
    );
  }
}

export default Coures;
