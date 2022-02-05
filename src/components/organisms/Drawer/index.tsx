import {
  Chat, Home,
} from '@mui/icons-material';
import {
  Box, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import useAuth from '../../../pages/Auth/useAuth';
import history from '../../../utils/routes/history';

const routes: { name: string, route: string, icon: React.ReactElement }[] = [
  {
    name: 'Dashboard',
    route: '/dashboard/cases',
    icon: <Home />,
  },
  {
    name: 'Enquiries',
    route: '/dashboard/enquiries',
    icon: <Chat />,
  },
];

interface IProps {
  open: boolean;
  handleOpen: (open: boolean) => void;
}

const list = (handleClose: () => void, handleLogout: () => void) => (
  <Box
    role="presentation"
  >
    <List>
      {routes.map((route, index) => (
        <ListItem
          button
          key={route.name}
          onClick={() => {
            history.push(route.route);
            handleClose();
          }}
        >
          <ListItemIcon>
            {route.icon}
          </ListItemIcon>
          <ListItemText primary={route.name} />
        </ListItem>
      ))}
      <ListItem
        button
        onClick={handleLogout}
      >
        <ListItemIcon>
          Logout
        </ListItemIcon>
      </ListItem>
    </List>
  </Box>
);

export const NavigationSideBar: React.FC<IProps> = ({
  open,
  handleOpen,
}: IProps) => {
  const { handleLogout } = useAuth();
  return (
    <SwipeableDrawer
      sx={{
        '& .MuiButtonBase-root': {
          paddingRight: '30px',
        },
      }}
      open={open}
      onClose={() => handleOpen(false)}
      onOpen={() => handleOpen(true)}
      color="primary"
    >
      {list(() => handleOpen(false), handleLogout)}
    </SwipeableDrawer>

  );
};
export default NavigationSideBar;
