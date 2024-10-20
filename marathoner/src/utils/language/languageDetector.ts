import {LanguageDetectorModule} from 'i18next';
import * as RNLocalize from 'react-native-localize';

const RNLanguageDetector: LanguageDetectorModule = {
    type: 'languageDetector',
    init: () => {},
    detect: () => {
        const locales = RNLocalize.getLocales();

        if (Array.isArray(locales) && locales.length > 0) {
            // Get the first locale
            const {languageCode} = locales[0];
            return languageCode;
        } else {
            // Default to 'en' if locales are not available
            return 'en';
        }
    },
    cacheUserLanguage: () => {},
};

export default RNLanguageDetector;
