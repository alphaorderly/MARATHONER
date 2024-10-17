import {authorize, AuthorizeResult} from 'react-native-app-auth';
import authConfig from '../../constants/oAuth2/authConfig';

/**
{
    "accessToken": "1234567890",
  "accessTokenExpirationDate": "2024-10-17T09:19:24Z",
  "authorizeAdditionalParameters": {},
    "idToken": "",
  "refreshToken": "",
  "scopes": [],
  "tokenAdditionalParameters": {
    "membership_id": "1234567890",
  },
  "tokenType": "Bearer"
}
 */

const auth = async (
    saveToken: (
        newAccessToken: string,
        newMembershipId: string,
    ) => Promise<void>,
) => {
    try {
        const response: AuthorizeResult = await authorize(authConfig); // authConfig를 이용해 인증을 시도
        if (
            response.accessToken !== null &&
            response.tokenAdditionalParameters !== undefined
        ) {
            await saveToken(
                response.accessToken,
                response.tokenAdditionalParameters.membership_id,
            );
        }
    } catch (error) {
        console.error('Error', error); // 에러가 발생하면 출력
    }
};

export default auth;
