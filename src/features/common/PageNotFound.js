import React, { PureComponent } from 'react';
import Box from './Box';

export default class PageNotFound extends PureComponent {
  render() {
    return (
      <div className="common-page-not-found">
        <Box customClass="centered">
          Page not found.
        </Box>
      </div>
    );
  }
}
