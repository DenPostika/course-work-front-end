import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  HOME_FACE_RECORDING_BEGIN,
  HOME_FACE_RECORDING_SUCCESS,
  HOME_FACE_RECORDING_FAILURE,
  HOME_FACE_RECORDING_DISMISS_ERROR,
} from './constants';

export function faceRecording() {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: HOME_FACE_RECORDING_BEGIN,
  };
}

export function dismissFaceRecordingError() {
  return {
    type: HOME_FACE_RECORDING_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on HOME_FACE_RECORDING_BEGIN actions
export function* doFaceRecording() {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    res = yield call(delay, 2000);
  } catch (err) {
    yield put({
      type: HOME_FACE_RECORDING_FAILURE,
      data: { error: err },
    });
    return;
  }
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: HOME_FACE_RECORDING_SUCCESS,
    data: res,
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchFaceRecording() {
  yield takeLatest(HOME_FACE_RECORDING_BEGIN, doFaceRecording);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case HOME_FACE_RECORDING_BEGIN:
      return {
        ...state,
        faceRecordingPending: true,
        faceRecordingError: null,
      };

    case HOME_FACE_RECORDING_SUCCESS:
      return {
        ...state,
        faceRecordingPending: false,
        faceRecordingError: null,
        activeTab: 'form'
      };

    case HOME_FACE_RECORDING_FAILURE:
      return {
        ...state,
        faceRecordingPending: false,
        faceRecordingError: action.data.error,
      };

    case HOME_FACE_RECORDING_DISMISS_ERROR:
      return {
        ...state,
        faceRecordingError: null,
      };

    default:
      return state;
  }
}
