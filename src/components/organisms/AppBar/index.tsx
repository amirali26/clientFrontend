import { MeetingRoom } from '@mui/icons-material';
import {
  AppBar, IconButton, Toolbar, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import Logo from '../../atoms/Logo';

type Props = {
  handleLogout: () => void;
};

const NavigationAppBar: React.FC<Props> = ({ handleLogout }) => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <div>
        <Logo width={200} />
      </div>
      <div style={{ flexGrow: 1 }} />
      <IconButton sx={{ paddingBottom: '20px' }} size="large" color="inherit" onClick={handleLogout}>
        <Typography sx={{ color: 'white', marginRight: '8px' }}>Logout</Typography>
        <MeetingRoom />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default NavigationAppBar;
