// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_ADD_NEW_FACE,
} from './constants';

export function addNewFace() {
  return {
    type: HOME_ADD_NEW_FACE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_ADD_NEW_FACE:
      return {
        ...state,
        activeTab: 'faceCapture'
      };

    default:
      return state;
  }
}
