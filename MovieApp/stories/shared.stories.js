import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Toggle, LinkButton, Header, Footer, SubHeader } from '../client/src/shared';

storiesOf('Shared', module)
  .add('Toggle', () => (
    <Toggle
      labels={['on', 'off']}
      text="Toggle"
      name="name"
      onChange={action('clicked')}
      values={['on', 'off']}
      defaultValue="on"
    />
  ))
  .add('LinkButton', () => (
    <Router>
      <LinkButton to={linkTo('Shared')}>Back</LinkButton>
    </Router>
  ))
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer />)
  .add('SubHeader', () => (
    <SubHeader>
      <span>Films by Cartoon genres</span>
      <span>Here it is 10 films</span>
    </SubHeader>
  ));
