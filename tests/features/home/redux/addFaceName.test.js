import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_ADD_FACE_NAME_BEGIN,
  HOME_ADD_FACE_NAME_SUCCESS,
  HOME_ADD_FACE_NAME_FAILURE,
  HOME_ADD_FACE_NAME_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  addFaceName,
  dismissAddFaceNameError,
  doAddFaceName,
  reducer,
} from 'src/features/home/redux/addFaceName';

describe('home/redux/addFaceName', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by addFaceName', () => {
    expect(addFaceName()).to.have.property('type', HOME_ADD_FACE_NAME_BEGIN);
  });

  it('returns correct action by dismissAddFaceNameError', () => {
    expect(dismissAddFaceNameError()).to.have.property('type', HOME_ADD_FACE_NAME_DISMISS_ERROR);
  });

  // saga tests
  const generator = doAddFaceName();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches HOME_ADD_FACE_NAME_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: HOME_ADD_FACE_NAME_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches HOME_ADD_FACE_NAME_FAILURE action when failed', () => {
    const generatorForError = doAddFaceName();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: HOME_ADD_FACE_NAME_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type HOME_ADD_FACE_NAME_BEGIN correctly', () => {
    const prevState = { addFaceNamePending: false };
    const state = reducer(
      prevState,
      { type: HOME_ADD_FACE_NAME_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addFaceNamePending).to.be.true;
  });

  it('handles action type HOME_ADD_FACE_NAME_SUCCESS correctly', () => {
    const prevState = { addFaceNamePending: true };
    const state = reducer(
      prevState,
      { type: HOME_ADD_FACE_NAME_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addFaceNamePending).to.be.false;
  });

  it('handles action type HOME_ADD_FACE_NAME_FAILURE correctly', () => {
    const prevState = { addFaceNamePending: true };
    const state = reducer(
      prevState,
      { type: HOME_ADD_FACE_NAME_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addFaceNamePending).to.be.false;
    expect(state.addFaceNameError).to.exist;
  });

  it('handles action type HOME_ADD_FACE_NAME_DISMISS_ERROR correctly', () => {
    const prevState = { addFaceNameError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_ADD_FACE_NAME_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addFaceNameError).to.be.null;
  });
});