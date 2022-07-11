import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import RedactPage from '../index';

describe('<RedactPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <RedactPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
