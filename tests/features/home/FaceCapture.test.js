import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FaceCapture } from 'src/features/home/FaceCapture';

describe('home/FaceCapture', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <FaceCapture {...props} />
    );

    expect(
      renderedComponent.find('.home-face-capture').getElement()
    ).to.exist;
  });
});
