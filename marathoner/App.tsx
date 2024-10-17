import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {authorize} from 'react-native-app-auth';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import authConfig from './src/constants/oAuth2/authConfig';
import auth from './src/services/authorization/auth';
import useSecureToken from './src/hooks/token/useSecureToken';

const App: FC = () => {
    const {accessToken, membershipId, saveCredentials} = useSecureToken();

    return (
        <GestureHandlerRootView className="flex-1">
            <NavigationContainer>
                <SafeAreaView className="flex-1 justify-center items-center">
                    <Text
                        className="text-5xl"
                        onPress={() => {
                            auth(saveCredentials);
                        }}>
                        test
                    </Text>
                    {accessToken !== null && (
                        <Text className="text-2xl">{accessToken}</Text>
                    )}
                    {membershipId !== null && (
                        <Text className="text-2xl">{membershipId}</Text>
                    )}
                </SafeAreaView>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
