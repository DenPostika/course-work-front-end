import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_FACE_RECORDING_BEGIN,
  HOME_FACE_RECORDING_SUCCESS,
  HOME_FACE_RECORDING_FAILURE,
  HOME_FACE_RECORDING_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  faceRecording,
  dismissFaceRecordingError,
  doFaceRecording,
  reducer,
} from 'src/features/home/redux/faceRecording';

describe('home/redux/faceRecording', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by faceRecording', () => {
    expect(faceRecording()).to.have.property('type', HOME_FACE_RECORDING_BEGIN);
  });

  it('returns correct action by dismissFaceRecordingError', () => {
    expect(dismissFaceRecordingError()).to.have.property('type', HOME_FACE_RECORDING_DISMISS_ERROR);
  });

  // saga tests
  const generator = doFaceRecording();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches HOME_FACE_RECORDING_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: HOME_FACE_RECORDING_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches HOME_FACE_RECORDING_FAILURE action when failed', () => {
    const generatorForError = doFaceRecording();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: HOME_FACE_RECORDING_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type HOME_FACE_RECORDING_BEGIN correctly', () => {
    const prevState = { faceRecordingPending: false };
    const state = reducer(
      prevState,
      { type: HOME_FACE_RECORDING_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.faceRecordingPending).to.be.true;
  });

  it('handles action type HOME_FACE_RECORDING_SUCCESS correctly', () => {
    const prevState = { faceRecordingPending: true };
    const state = reducer(
      prevState,
      { type: HOME_FACE_RECORDING_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.faceRecordingPending).to.be.false;
  });

  it('handles action type HOME_FACE_RECORDING_FAILURE correctly', () => {
    const prevState = { faceRecordingPending: true };
    const state = reducer(
      prevState,
      { type: HOME_FACE_RECORDING_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.faceRecordingPending).to.be.false;
    expect(state.faceRecordingError).to.exist;
  });

  it('handles action type HOME_FACE_RECORDING_DISMISS_ERROR correctly', () => {
    const prevState = { faceRecordingError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_FACE_RECORDING_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.faceRecordingError).to.be.null;
  });
});