import {useAtomValue} from 'jotai';
import {FC, useEffect} from 'react';
import authAtom from '../../store/jotai/authAtom';
import LoginScreen from '../../screens/Auth/LoginScreen';
import MainNaviation from '../Main/MainNavigation';
import {Configuration} from 'bungie-marathon-api';
import {API_KEY} from '@env';

const AuthNavigation: FC = () => {
    const token = useAtomValue(authAtom);

    useEffect(() => {
        if (token.accessToken !== null && token.membershipId !== null) {
            Configuration.initialize({
                xApiKey: API_KEY,
                accessToken: token.accessToken,
                refreshToken: '',
            });
        }
    }, [token.accessToken, token.membershipId]);

    if (token.accessToken === null || token.membershipId === null) {
        return <LoginScreen />;
    } else {
        return <MainNaviation />;
    }
};

export default AuthNavigation;
