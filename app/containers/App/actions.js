/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { REDACT_MESSAGE, REDACT_MESSAGE_SUCCESS, REDACT_MESSAGE_ERROR } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of REDACT_MESSAGE
 */
export function redactMessage() {
  return {
    type: REDACT_MESSAGE,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} message The current message
 *
 * @return {object}      An action object with a type of REDACT_MESSAGE_SUCCESS passing the repos
 */
export function messageRedacted(redacted, message) {
  return {
    type: REDACT_MESSAGE_SUCCESS,
    redacted,
    message,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of REDACT_MESSAGE_ERROR passing the error
 */
export function redactMessageError(error) {
  return {
    type: REDACT_MESSAGE_ERROR,
    error,
  };
}
