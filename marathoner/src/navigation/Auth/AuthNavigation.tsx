import {useAtomValue} from 'jotai';
import {FC} from 'react';
import {Text, View} from 'react-native';
import authAtom from '../../store/jotai/authAtom';
import LoginScreen from '../../screens/Auth/LoginScreen';
import {useResetAtom} from 'jotai/utils';

const AuthNavigation: FC = () => {
    const token = useAtomValue(authAtom);
    const logout = useResetAtom(authAtom);

    if (token.accessToken === null || token.membershipId === null) {
        return <LoginScreen />;
    } else {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="text-xl text-white" onPress={logout}>
                    authenticated
                </Text>
                <Text className="text-sm text-white" onPress={logout}>
                    {token.accessToken}
                </Text>
                <Text className="text-sm text-white" onPress={logout}>
                    {token.membershipId}
                </Text>
            </View>
        );
    }
};

export default AuthNavigation;
