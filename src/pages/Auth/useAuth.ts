import Auth from '@aws-amplify/auth/lib';
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useHelpmycaseSnackbar from '../../hooks/useHelpmycaseSnackbar';
import history from '../../utils/routes/history';

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const sb = useHelpmycaseSnackbar();
  const { user, setUser } = useAuthContext();

  const signIn = async (email: string) => {
    try {
      setLoading(true);
      const userResponse = await Auth.signIn(email);
      if (userResponse) setUser(userResponse);
      history.push('/auth/verify', {
        verify: false,
      });
    } catch (e: any) {
      sb.trigger(e.message || 'Something went wrong with signing you in');
    } finally {
      setLoading(false);
    }
  };

  const verifyMfa = async (code: string) => {
    try {
      setLoading(true);

      if (!user) throw Error('Unable to get logged in user session');
      const result = await Auth.sendCustomChallengeAnswer(user, code);
      setUser(result);
      history.push('/client');
    } catch (e: any) {
      sb.trigger(e.message || 'Something went wrong when verifying your MFA');
    } finally {
      setLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      return await Auth.currentSession();
    } catch (e: any) {
      if (!(e === 'No current user')) {
        sb.trigger(e.message || 'There was an issue hi');
      }
    }
    return false;
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      history.push('/auth/login');
    } catch (e: any) {
      sb.trigger(e.message || 'There was an issue signing you out');
    }
  };

  return {
    loading,
    signIn,
    verifyMfa,
    isLoggedIn,
    handleLogout,
  };
};

export default useAuth;
