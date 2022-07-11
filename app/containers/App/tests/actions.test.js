import { REDACT_MESSAGE, REDACT_MESSAGE_SUCCESS, REDACT_MESSAGE_ERROR } from '../constants';

import { redactMessage, messageRedacted, redactMessageError } from '../actions';

describe('App Actions', () => {
  describe('redactMessage', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: REDACT_MESSAGE,
      };

      expect(redactMessage()).toEqual(expectedResult);
    });
  });

  describe('messageRedacted', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const message = 'test';
      const expectedResult = {
        type: REDACT_MESSAGE_SUCCESS,
        repos: fixture,
        message,
      };

      expect(messageRedacted(fixture, message)).toEqual(expectedResult);
    });
  });

  describe('redactMessageError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: REDACT_MESSAGE_ERROR,
        error: fixture,
      };

      expect(redactMessageError(fixture)).toEqual(expectedResult);
    });
  });
});
