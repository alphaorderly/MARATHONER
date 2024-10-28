import {useAtomValue} from 'jotai';
import {FC} from 'react';
import authAtom from '../../store/jotai/authAtom';
import LoginScreen from '../../screens/Auth/LoginScreen';
import MainNaviation from '../Main/MainNavigation';

const AuthNavigation: FC = () => {
    const token = useAtomValue(authAtom);

    if (token.accessToken === null || token.membershipId === null) {
        return <LoginScreen />;
    } else {
        return <MainNaviation />;
    }
};

export default AuthNavigation;
