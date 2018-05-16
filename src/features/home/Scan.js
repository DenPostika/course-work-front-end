import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Box from '../common/Box';
import FaceCapture from './FaceCapture';

export class Scan extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  state = {
    name: ''
  };
  onAddFaceName = (e) => {
    e.preventDefault();
    this.props.actions.addFaceName();
  };
  handleAddNewFace = e => {
    e.preventDefault();
    this.props.actions.addNewFace();

  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderContent = () => {
    const form = (
      <Box customClass="centered">
        <form action="" className="form" onSubmit={this.onAddFaceName}>
          <span className="smile">😀</span>
          <span className="title">Супер! Введите свое имя в поле ниже</span>
          <input
            className="input"
            type="text"
            placeholder="Имя"
            pattern=".{3,}"
            title="Не менее трех символов"
            required
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <button className="btn" type="submit" disabled={this.props.loading}>Загрузить</button>
        </form>
      </Box>
    );
    const success = (
      <Box customClass="centered">
        <form action="" className="form" onSubmit={this.handleAddNewFace}>
          <span className="smile">🎉</span>
          <span className="title">Поздравляем! Ваше лицо добавлено!</span>

          <button className="btn" type="submit" >Добавить новое лицо</button>
        </form>
      </Box>
    );
    let content = '';
    switch (this.props.activeTab) {
      case 'form':
        content = form;
        break;
      case 'success':
        content = success;
        break;
      case 'faceCapture':
        content = <FaceCapture />;
        break;
      default:
        // content = form;
        content = <FaceCapture />;
    }
    return content;
  };
  render() {
    return (
      <div className="home-scan">
        {this.renderContent()}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
    activeTab: state.home.activeTab,
    loading: state.home.addFaceNamePending,
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
)(Scan);
