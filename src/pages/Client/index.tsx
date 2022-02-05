import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientAppBar from '../../components/organisms/AppBar';
import useAuth from '../Auth/useAuth';
import Request from './Request';
import Requests from './Requests';

const Client: React.FC = () => {
  const { shouldRedirectToDashboard, handleLogout } = useAuth();

  useEffect(() => {
    shouldRedirectToDashboard();
  }, []);

  return (
    <>
      <ClientAppBar handleLogout={handleLogout} />
      <Switch>
        <Route path="/client/requests/:id" component={Request} />
        <Route path={['/client/requests/', '/']} component={Requests} />
      </Switch>
    </>
  );
};

export default Client;
