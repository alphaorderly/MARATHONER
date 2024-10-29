import {Text, View} from 'react-native';
import GreenFilledButton from '~/components/Button/Filled/FilledButton';
import LanguageSelectDropdown from '~/components/Language/LanguageSelectDropdown';
import useLogout from '~/hooks/Login/useLogout';

const SettingScreen = () => {
    const logout = useLogout();

    return (
        <View className="flex-1 bg-black p-4 flex flex-col py-10 gap-10">
            <LanguageSelectDropdown />
            <GreenFilledButton
                colorClass="bg-vivid-red"
                className="h-12 mt-4 w-full flex flex-col justify-center"
                onPress={() => {
                    logout();
                }}>
                <Text className="text-center text-3xl font-plex-bold">
                    로그아웃
                </Text>
            </GreenFilledButton>
        </View>
    );
};

export default SettingScreen;
