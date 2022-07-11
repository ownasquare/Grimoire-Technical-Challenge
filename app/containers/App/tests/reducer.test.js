import produce from 'immer';

import appReducer from '../reducer';
import { redactMessage, messageRedacted, redactMessageError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentMessage: false,
      messageData: {
        repositories: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the redactMessage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.messageData.redacted = false;
    });

    expect(appReducer(state, redactMessage())).toEqual(expectedResult);
  });

  it('should handle the messageRedacted action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const message = 'test';
    const expectedResult = produce(state, draft => {
      draft.messageData.redacted = fixture;
      draft.loading = false;
      draft.currentMessage = message;
    });

    expect(appReducer(state, messageRedacted(fixture, message))).toEqual(
      expectedResult,
    );
  });

  it('should handle the redactMessageError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, redactMessageError(fixture))).toEqual(
      expectedResult,
    );
  });
});
