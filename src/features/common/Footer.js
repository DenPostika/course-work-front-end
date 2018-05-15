import React, { Component } from 'react';
import Box from './Box';
import logoKAI from '../../images/logoKAI.svg';

export default class Footer extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-footer">
        <Box customClass="centered">
          <img src={logoKAI} alt="ХАИ" />
          <span>© Denis Postyka 🚀</span>
        </Box>
      </div>
    );
  }
}
