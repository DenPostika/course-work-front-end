import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Sidebar } from 'src/features/common/Sidebar';

describe('common/Sidebar', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Sidebar {...props} />
    );

    expect(
      renderedComponent.find('.common-sidebar').getElement()
    ).to.exist;
  });
});
