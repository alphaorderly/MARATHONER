import {getLocales} from 'react-native-localize';

const getLanguageCode = () => {
    const languages = getLocales();

    if (languages.length < 1) {
        return 'en';
    } else {
        return languages[0].languageCode;
    }
};

export default getLanguageCode;
