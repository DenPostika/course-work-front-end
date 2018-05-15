import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Users } from 'src/features/users/Users';

describe('users/Users', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Users {...pageProps} />
    );

    expect(
      renderedComponent.find('.users-users').getElement()
    ).to.exist;
  });
});
