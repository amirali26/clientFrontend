import React, { useState } from 'react';
import useAuth from '../../../pages/Auth/useAuth';
import NavigationAppBar from '../../organisms/AppBar';
import NavigationSideBar from '../../organisms/Drawer';

export const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { handleLogout } = useAuth();

  const handleOpen = (_open: boolean): void => {
    setOpen(_open);
  };

  return (
    <>
      <NavigationAppBar handleLogout={handleLogout} />
      <NavigationSideBar open={open} handleOpen={handleOpen} />
    </>
  );
};

export default Navigation;
