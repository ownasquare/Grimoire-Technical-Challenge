import { selectHome, makeSelectMessage } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      messageData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectMessage', () => {
  const messageSelector = makeSelectMessage();
  it('should select the message', () => {
    const message = 'type something...';
    const mockedState = {
      home: {
        message,
      },
    };
    expect(messageSelector(mockedState)).toEqual(message);
  });
});
