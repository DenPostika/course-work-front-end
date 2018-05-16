import { expect } from 'chai';

import {
  HOME_ADD_NEW_FACE,
} from 'src/features/home/redux/constants';

import {
  addNewFace,
  reducer,
} from 'src/features/home/redux/addNewFace';

describe('home/redux/addNewFace', () => {
  it('returns correct action by addNewFace', () => {
    expect(addNewFace()).to.have.property('type', HOME_ADD_NEW_FACE);
  });

  it('handles action type HOME_ADD_NEW_FACE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_ADD_NEW_FACE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
