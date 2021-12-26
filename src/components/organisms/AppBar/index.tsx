import { AppBar, Toolbar } from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import Logo from '../../atoms/Logo';

const NavigationAppBar: React.FC = () => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <div>
        <Logo width={200} />
      </div>
    </Toolbar>
  </AppBar>
);

export default NavigationAppBar;
