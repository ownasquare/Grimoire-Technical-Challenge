import { CHANGE_MESSAGE } from '../constants';

import { changeMessage } from '../actions';

describe('Home Actions', () => {
  describe('changeMessage', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_MESSAGE,
        message: fixture,
      };

      expect(changeMessage(fixture)).toEqual(expectedResult);
    });
  });
});
