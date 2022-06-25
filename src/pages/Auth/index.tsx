import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { IconButton, Styles } from 'helpmycase-storybook/dist/components/External';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeBackgroundImage from '../../assets/images/homepage-main.jpg';
import BackgroundImage from '../../assets/images/login-background.png';
import Logo from '../../components/atoms/Logo';
import history from '../../utils/routes/history';
import Login from './Login';
import LoginHelperText from './Login/HelperText';
import useAuth from './useAuth';
import VerifyMfa from './VerifyMfa';
import VerifyHelperText from './VerifyMfa/HelperText';

const useStyles = Styles.makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: -1,
    background: `url(${BackgroundImage})`,
  },
  card: {
    width: '1200px',
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: '0 0 20px 2px #000',
    '& > div:first-of-type': {
      boxShadow: '10px 0 5px -2px #888',
    },
    '& > div': {
      width: '50%',
      padding: '40px 24px',
    },
  },
  welcome: {
    background: `url(${WelcomeBackgroundImage}) center center`,
    backgroundSize: 'cover',
    color: 'white',
  },
  form: {
    color: 'black',
    width: '50%',
    borderRadius: '5px',
    '& > form': {
      width: '500px',
    },
  },
  '@media (max-width: 1200px)': {
    card: {
      border: 0,
      justifyContent: 'center',
      width: 'auto',
      maxWidth: '90%',
    },
    form: {
      width: '100% !important',
      boxSizing: 'border-box',
      '& > form': {
        width: '100%',
      },
    },
    welcome: {
      display: 'none',
    },
  },
});

const Auth: React.FC = () => {
  const styles = useStyles();

  const { shouldRedirectToDashboard } = useAuth();

  useEffect(() => {
    shouldRedirectToDashboard();
  }, []);

  return (
    <div className={styles.root}>
      <div className={clsx(styles.card, 'flex row spaceBetween borderRadius')}>
        <div className={styles.welcome}>
          <div className="flex column center alignLeft fullHeight textAlignLeft">
            <Logo />
            <Switch>
              <Route exact path={['/auth', '/auth/login']}>
                <LoginHelperText />
              </Route>
              <Route exact path="/auth/verify">
                <VerifyHelperText />
              </Route>
            </Switch>
          </div>
        </div>
        <div className={clsx(styles.form, 'flex column center')}>
          <Switch>
            <Route exact path={['/auth', '/auth/login']}>
              <Login />
            </Route>
            <Route exact path="/auth/verify">
              <VerifyMfa key={history.location.pathname} />
            </Route>
          </Switch>
          <div className="marginTopMedium flex row center alignLeft justifyContentStart fullWidth marginLeftMedium">
            <IconButton color="primary">
              <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            </IconButton>
            <IconButton color="primary" className="marginLeftSmall marginRightSmall">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </IconButton>
            <IconButton color="primary">
              <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
