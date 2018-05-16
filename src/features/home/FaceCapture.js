import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Box from '../common/Box';
import faceID from '../../images/faceID.svg';

export class FaceCapture extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
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
    this.props.actions.faceRecording();
  };
  videoError = () => {

  };
  render() {
    return (
      <div className="home-face-capture">
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

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FaceCapture);
