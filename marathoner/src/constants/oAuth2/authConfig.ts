import {AuthConfiguration} from 'react-native-app-auth';
import {API_CLIENT_ID, API_KEY} from '@env';

const authConfig: AuthConfiguration = {
    clientId: API_CLIENT_ID,
    additionalHeaders: {
        'X-API-Key': API_KEY,
    },
    redirectUrl: 'marathoner://redirect',
    scopes: ['read', 'profile'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.bungie.net/en/oauth/authorize',
        tokenEndpoint: 'https://www.bungie.net/platform/app/oauth/token/',
    },
};

export default authConfig;
