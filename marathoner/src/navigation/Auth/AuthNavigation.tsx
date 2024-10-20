import {useAtomValue} from 'jotai';
import {FC} from 'react';
import authAtom from '../../store/jotai/authAtom';
import LoginScreen from '../../screens/Auth/LoginScreen';
import MainScren from '~/screens/Main/MainScreen';

const AuthNavigation: FC = () => {
    const token = useAtomValue(authAtom);

    if (token.accessToken === null || token.membershipId === null) {
        return <LoginScreen />;
    } else {
        return <MainScren />;
    }
};

export default AuthNavigation;
