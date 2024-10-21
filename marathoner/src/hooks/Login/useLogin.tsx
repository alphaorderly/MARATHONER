import {useSetAtom} from 'jotai';
import {authorize, AuthorizeResult} from 'react-native-app-auth';
import authConfig from '~/constants/oAuth2/authConfig';
import authAtom from '~/store/jotai/authAtom';

const useLogin = () => {
    const setToken = useSetAtom(authAtom);

    const auth = async () => {
        try {
            const response: AuthorizeResult = await authorize(authConfig);

            console.log(JSON.stringify(response, null, 4));

            if (
                response.accessToken &&
                response.tokenAdditionalParameters &&
                response.tokenAdditionalParameters.membership_id
            ) {
                setToken({
                    accessToken: response.accessToken,
                    membershipId:
                        response.tokenAdditionalParameters.membership_id,
                });
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    return {auth};
};

export default useLogin;
