/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_MESSAGE } from './constants';

// The initial state of the App
export const initialState = {
  message: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_MESSAGE:
        draft.message = action.message.replace(/'([^"]+)'/g, (_, s) => `'${s.replace(/[a-zA-Z0-9]/g, 'X')}'`)
    .replace(/"([^"]+)"/g, (_, s) => `"${s.replace(/[a-zA-Z0-9]/g, 'X')}"`);
        break;
    }
  });

export default homeReducer;
