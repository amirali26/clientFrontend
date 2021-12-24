interface CognitoConfig {
  poolId: string;
  clientId: string;
  storage: Storage;
}

interface EnvironmentConfig {
  REACT_APP_API_URL: string;
  REACT_APP_COGNITO: CognitoConfig;
}

// Default is development
const environmentVars: EnvironmentConfig = {
  REACT_APP_API_URL: window.location.href.includes('client.helpmycase.co.uk') ? 'https://client-api.helpmycase.co.uk' : 'http://localhost:8081',
  REACT_APP_COGNITO: {
    poolId: 'eu-west-1_mYIGCWPvH',
    clientId: '5a5sfrkr47tad84pkt3feucrd2',
    storage: localStorage,
  },
};

export default environmentVars;
