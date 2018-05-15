import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


export class Users extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="users-users">
        <h1 className="title">Лица</h1>
        <ul className="list_wrap">
          <li className="list_item">
            <span className="avatar">
              <img src="" alt="A" />
            </span>
            <span className="name" >Денис Постыка</span>
            <button className="btn_onlyIcon delete">
              <FontAwesomeIcon icon="trash" />
            </button>
          </li>
          <li className="list_item">
            <span className="avatar">
              <img src="" alt="A" />
            </span>
            <span className="name" >Денис Постыка</span>
            <button className="btn_onlyIcon delete">
              <FontAwesomeIcon icon="trash" />
            </button>
          </li>
        </ul>
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
)(Users);
