import produce from 'immer';

import homeReducer from '../reducer';
import { changeMessage } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      message: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeMessage action correctly', () => {
    const fixture = 'type something...';
    const expectedResult = produce(state, draft => {
      draft.message = fixture;
    });

    expect(homeReducer(state, changeMessage(fixture))).toEqual(expectedResult);
  });
});
