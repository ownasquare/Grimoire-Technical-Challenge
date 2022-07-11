/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { REDACT_MESSAGE_SUCCESS, REDACT_MESSAGE, REDACT_MESSAGE_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentMessage: false,
  messageData: {
    redacted: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REDACT_MESSAGE:
        draft.loading = true;
        draft.error = false;
        draft.messageData.redacted = false;
        break;

      case REDACT_MESSAGE_SUCCESS:
        draft.messageData.redacted = (action.message!==draft.message);
        draft.loading = false;
        draft.currentMessage = action.message;
        break;

      case REDACT_MESSAGE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
