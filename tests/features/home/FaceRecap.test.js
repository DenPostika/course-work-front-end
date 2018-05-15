import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FaceRecap } from 'src/features/home';

describe('home/FaceRecap', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <FaceRecap />
    );

    expect(
      renderedComponent.find('.home-face-recap').getElement()
    ).to.exist;
  });
});
