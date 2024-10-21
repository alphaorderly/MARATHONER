/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthNavigation from './src/navigation/Auth/AuthNavigation';
import {useAtom} from 'jotai';
import languageAtom from '~/store/jotai/languageAtom';
import getLanguageCode from '~/utils/language/getLanguageCode';
import i18n from './i18n';

const App: FC = () => {
    const [language, setLanguage] = useAtom(languageAtom);

    useEffect(() => {
        if (language === null) {
            const currentLanguage = getLanguageCode();
            setLanguage(currentLanguage);
            console.log('currentLanguage set to', currentLanguage);
        } else {
            console.log('currentLanguage is ', language);
            i18n.changeLanguage(language);
        }
    }, []);

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
