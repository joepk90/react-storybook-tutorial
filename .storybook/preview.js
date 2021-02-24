import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/core'
import { withConsole } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

// shows which component the console log was declared
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
    <CSSReset />
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  )
];
