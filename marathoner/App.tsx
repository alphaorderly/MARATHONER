import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthNavigation from './src/navigation/Auth/AuthNavigation';

const App: FC = () => {
    return (
        <GestureHandlerRootView className="flex-1 bg-black">
            <NavigationContainer>
                <SafeAreaView className="flex-1">
                    <AuthNavigation />
                </SafeAreaView>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
