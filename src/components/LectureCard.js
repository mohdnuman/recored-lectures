import React, { Component } from "react";

class LectureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  handleDrop = () => {
    this.setState({
      active: true,
    });
  };
  handleDropClose=()=>{
    this.setState({
        active:false
    })
  }

  render() {
    if (this.props.lecture.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {!this.state.active && (
            <div className="lecture-not-active">
              <span style={{fontWeight:800}}>{this.props.lecture.name}</span> 
              <span className="drop-down" onClick={this.handleDrop}>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" style={{height:20, width:20}}/>
              </span>
            </div>
          )}
          {this.state.active && (
            <div className="lecture-active">
              <div className="lecture-not-active">
                <span style={{fontWeight:800}}>{this.props.lecture.name}</span>
                <span className="drop-down" onClick={this.handleDropClose}>
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" style={{height:20, width:20}}/>
                </span>
              </div>
              <video className="video" id="video_player" onLoad={this.onLoad} controls>
                <source
                  src={`http://localhost:8000${this.props.lecture.video}`}
                  type="video/ogg"
                ></source>
              </video>
              {/* <video src={`http://localhost:8000${this.props.lecture.video}`} onLoad={this.onLoad} className="video"/> */}
            </div>
          )}
        </div>
      );
    }
  }
}

export default LectureCard;
