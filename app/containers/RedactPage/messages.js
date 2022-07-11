/*
 * RedactPage Messages
 *
 * This contains all the text for the RedactPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.RedactPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Redact Text',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Grimoire Text Redacting',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Type in a text and anything that's within double quotes will be redacted.`,
  },
  stateManagementHeader: {
    id: `${scope}.state_management.header`,
    defaultMessage: 'Predictable state management',
  },
  stateManagementMessages: {
    id: `${scope}.state_management.message`,
    defaultMessage: `
      Unidirectional data flow allows for change logging and time travel
    debugging.
    `,
  },
  javascriptHeader: {
    id: `${scope}.javascript.header`,
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    id: `${scope}.javascript.message`,
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    id: `${scope}.css.header`,
    defaultMessage: 'Redact',
  },
  cssMessage: {
    id: `${scope}.css.message`,
    defaultMessage: 'Next generation CSS',
  }
});
