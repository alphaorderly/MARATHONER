import {useState, useEffect} from 'react';
import TextDropdownPicker from '../Dropdown/TextDropdownPicker';
import availableLocales from '~/constants/locales/availableLocales';
import i18n from '../../../i18n';
import storage from '~/store/MMKV/storage';

const LanguageSelectDropdown = () => {
    const initialLanguage = storage.getString('language') || i18n.languages[0];
    const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setCurrentLanguage(lng);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, []);

    return (
        <TextDropdownPicker
            items={availableLocales}
            currentValue={currentLanguage}
            sizeClassName="w-full"
            onChange={(value) => {
                const newLanguage = value as string;
                i18n.changeLanguage(newLanguage); // Update i18n language
                storage.set('language', newLanguage); // Save to storage
            }}
        />
    );
};

export default LanguageSelectDropdown;
