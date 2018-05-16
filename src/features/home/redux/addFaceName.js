import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  HOME_ADD_FACE_NAME_BEGIN,
  HOME_ADD_FACE_NAME_SUCCESS,
  HOME_ADD_FACE_NAME_FAILURE,
  HOME_ADD_FACE_NAME_DISMISS_ERROR,
} from './constants';

export function addFaceName() {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: HOME_ADD_FACE_NAME_BEGIN,
  };
}

export function dismissAddFaceNameError() {
  return {
    type: HOME_ADD_FACE_NAME_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on HOME_ADD_FACE_NAME_BEGIN actions
export function* doAddFaceName() {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    res = yield call(delay, 3000);
  } catch (err) {
    yield put({
      type: HOME_ADD_FACE_NAME_FAILURE,
      data: { error: err },
    });
    return;
  }
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: HOME_ADD_FACE_NAME_SUCCESS,
    data: res,
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchAddFaceName() {
  yield takeLatest(HOME_ADD_FACE_NAME_BEGIN, doAddFaceName);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case HOME_ADD_FACE_NAME_BEGIN:
      return {
        ...state,
        addFaceNamePending: true,
        addFaceNameError: null,
      };

    case HOME_ADD_FACE_NAME_SUCCESS:
      return {
        ...state,
        addFaceNamePending: false,
        addFaceNameError: null,
        activeTab: 'success'
      };

    case HOME_ADD_FACE_NAME_FAILURE:
      return {
        ...state,
        addFaceNamePending: false,
        addFaceNameError: action.data.error,
      };

    case HOME_ADD_FACE_NAME_DISMISS_ERROR:
      return {
        ...state,
        addFaceNameError: null,
      };

    default:
      return state;
  }
}
