import React, { Component } from 'react';

import Box from '../common/Box';
import faceID from '../../images/faceID.svg';

export default class FaceRecap extends Component {
  static propTypes = {

  };
  static defaultProps = {
    videoSrc: null,
  };
  state = {
    videoSrc: null,
  };
  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ video: true }, this.handleVideo, this.videoError);
    }
  }
  handleVideo = (stream) => {
    // Update the state, triggering the component to re-render with the correct stream
    this.setState({ videoSrc: window.URL.createObjectURL(stream) });
  };
  videoError = () => {

  };
  render() {
    return (
      <div className="home-face-recap">
        {this.state.videoSrc ? (
          <Box customClass="centered">
            <Box customClass="circle centered">
              <video id="_webcam" src={this.state.videoSrc} autoPlay="true" width="520" />
            </Box>
            <span className="title">
            Поворачивайте голову
            пока шкала не заполнится
            </span>
          </Box>
        ) : (

          <Box customClass="centered">
            <Box customClass="circle centered">
              <img src={faceID} alt="faceID" />
            </Box>
            <span className="title">
            Разрешите доступ к камере
            и начните сканирование
            </span>
          </Box>
        )}

      </div>
    );
  }
}
