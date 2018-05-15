import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Scan } from 'src/features/home/Scan';

describe('home/Scan', () => {
  it('renders node with correct class name', () => {
    const props = {
      scan: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Scan {...props} />
    );

    expect(
      renderedComponent.find('.home-scan').getElement()
    ).to.exist;
  });
});
