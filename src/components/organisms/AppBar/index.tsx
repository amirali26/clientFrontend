import { MeetingRoom } from '@mui/icons-material';
import {
  AppBar, IconButton, Toolbar, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import history from '../../../utils/routes/history';
import Logo from '../../atoms/Logo';

const NavigationAppBar: React.FC = () => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <div>
        <Logo width={200} />
      </div>
      <div style={{ flexGrow: 1 }} />
      <IconButton size="large" color="inherit" onClick={() => history.push('/auth/logout')}>
        <Typography sx={{ color: 'white', marginRight: '8px' }}>Logout</Typography>
        <MeetingRoom />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default NavigationAppBar;
