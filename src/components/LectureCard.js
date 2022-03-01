import React, { Component } from "react";

class LectureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      duration:0
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
  onLoad = (data) => {
    this.setState({ duration: data.duration });
};
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
              <img src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1646077440~hmac=72719f6e732060f07ee818ce1c54c44a" style={{height:20, width:20}}/>
              </span>
            </div>
          )}
          {this.state.active && (
            <div className="lecture-active">
              <div className="lecture-not-active">
                <span style={{fontWeight:800}}>{this.props.lecture.name}</span>
                <span id="meta">{this.state.duration}</span>
                <span className="drop-down" onClick={this.handleDropClose}>
                  <img src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1646077440~hmac=72719f6e732060f07ee818ce1c54c44a" style={{height:20, width:20}}/>
                </span>
              </div>
              {/* <video className="video" id="video_player" onLoad={this.onLoad} controls>
                <source
                  src={`http://localhost:8000${this.props.lecture.video}`}
                  type="video/ogg"
                ></source>
              </video> */}
              <video src={`http://localhost:8000${this.props.lecture.video}`} onLoad={this.onLoad} className="video"/>
            </div>
          )}
        </div>
      );
    }
  }
}

export default LectureCard;
