import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// 로컬 JSON 파일을 불러오는 함수
import enTranslation from './src/locales/en.json';
import koTranslation from './src/locales/ko.json';
import RNLanguageDetector from './src/utils/language/languageDetector';

// 번역 리소스 타입 정의
const resources = {
    en: {
        translation: enTranslation,
    },
    ko: {
        translation: koTranslation,
    },
} as const;

// i18n 설정
i18n.use(RNLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        compatibilityJSON: 'v3',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
