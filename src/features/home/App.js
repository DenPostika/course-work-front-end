import React, { Component } from 'react';
import PropTypes from 'prop-types';

import initFontAwesome from '../common/utils/fontAwesomeLib';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';
/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
initFontAwesome();
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div className="home-app">
        <Sidebar />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
