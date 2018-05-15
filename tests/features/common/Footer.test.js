import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Footer } from 'src/features/common';

describe('common/Footer', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Footer />
    );

    expect(
      renderedComponent.find('.common-footer').getElement()
    ).to.exist;
  });
});
