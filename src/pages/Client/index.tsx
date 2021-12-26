import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import ClientAppBar from '../../components/organisms/AppBar';
import useAuth from '../Auth/useAuth';
import Requests from './Requests';

const Client: React.FC = () => {
  const { shouldRedirectToDashboard } = useAuth();

  useEffect(() => {
    shouldRedirectToDashboard();
  }, []);

  return (
    <>
      <ClientAppBar />
      <Route path="/requests/:id" component={Requests} />
      <Route path={['/requests/', '/']} component={Requests} />
    </>
  );
};

export default Client;
