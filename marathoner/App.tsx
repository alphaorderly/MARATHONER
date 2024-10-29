import {NavigationContainer} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthNavigation from './src/navigation/Auth/AuthNavigation';
import BootSplash from 'react-native-bootsplash';
import sleep from '~/utils/sleep/sleep';
import i18n from './i18n';
import storage from '~/store/MMKV/storage';

const App: FC = () => {
    useEffect(() => {
        const languageSetting = () => {
            const savedLanguage = storage.getString('language');
            if (savedLanguage) {
                i18n.changeLanguage(savedLanguage);
            } else {
                const defaultLanguage = i18n.languages[0];
                i18n.changeLanguage(defaultLanguage);
                storage.set('language', defaultLanguage);
            }
        };

        languageSetting();

        sleep(2000).then(() => {
            BootSplash.hide();
        });
    }, []);

    return (
        <GestureHandlerRootView className="flex-1 bg-background">
            <NavigationContainer>
                <SafeAreaView className="flex-1">
                    <AuthNavigation />
                </SafeAreaView>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
