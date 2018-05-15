import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Box extends Component {
  static propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
  };

  static defaultProps = {
    children: '',
    customClass: '',
  };

  render() {
    return (
      <div className={`common-box box ${this.props.customClass}`}>
        {this.props.children}
      </div>
    );
  }
}
