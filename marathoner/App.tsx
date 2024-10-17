import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {authorize} from 'react-native-app-auth';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import authConfig from './src/constants/oAuth2/authConfig';

const App: FC = () => {
    const auth = async () => {
        try {
            console.log('start auth');
            const response = await authorize(authConfig); // Promise를 기다림
            console.log('Response', response); // 응답 결과를 출력
        } catch (error) {
            console.error('Error', error); // 에러가 발생하면 출력
        }
        console.log('end auth');
    };

    return (
        <GestureHandlerRootView className="flex-1">
            <NavigationContainer>
                <SafeAreaView className="flex-1 justify-center items-center">
                    <Text
                        className="text-5xl"
                        onPress={() => {
                            auth();
                        }}>
                        test
                    </Text>
                </SafeAreaView>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
