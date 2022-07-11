/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectMessage = () =>
  createSelector(
    selectHome,
    homeState => homeState.message,
  );

export { selectHome, makeSelectMessage };
