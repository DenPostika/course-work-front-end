import initialState from './initialState';
import { reducer as faceRecordingReducer } from './faceRecording';
import { reducer as addFaceNameReducer } from './addFaceName';
import { reducer as addNewFaceReducer } from './addNewFace';

const reducers = [
  faceRecordingReducer,
  addFaceNameReducer,
  addNewFaceReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
