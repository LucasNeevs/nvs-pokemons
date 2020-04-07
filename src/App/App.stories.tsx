import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import App from './App';

storiesOf('App', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <App />
  ))