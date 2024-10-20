import {AuthConfiguration} from 'react-native-app-auth';
import {API_CLIENT_ID} from '@env';

const authConfig: AuthConfiguration = {
    clientId: API_CLIENT_ID,
    redirectUrl: 'marathoner://redirect/',
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.bungie.net/en/oauth/authorize',
        tokenEndpoint: 'https://www.bungie.net/platform/app/oauth/token/',
    },
    issuer: 'https://www.bungie.net',
};

export default authConfig;
