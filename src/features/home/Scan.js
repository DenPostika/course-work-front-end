import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Box from '../common/Box';
import FaceRecap from './FaceRecap';

export class Scan extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  state = {
    name: ''
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderContent = () => {
    const form = (
      <Box customClass="centered">
        <form action="" className="form">
          <span className="smile">😀</span>
          <span className="title">Супер! Введите свое имя в поле ниже</span>
          <input className="input" type="text" placeholder="Имя" value={this.state.name} name="name" onChange={this.handleChange} />
          <button className="btn" type="submit" >Загрузить</button>
        </form>
      </Box>
    );
    const successForm = (
      <Box customClass="centered">
        <form action="" className="form">
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
      case 'successForm':
        content = successForm;
        break;
      case 'faceRecap':
        content = <FaceRecap />;
        break;
      default:
        // content = form;
        content = <FaceRecap />;
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
