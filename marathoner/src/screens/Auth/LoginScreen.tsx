import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import GreenFilledButton from '~/components/Button/Filled/GreenFilledButton';
import RightArrow from '~/assets/images/icons/goliath_btn_arrow.svg';
import useLogin from '~/hooks/Login/useLogin';

const LoginScreen: FC = () => {
    const {t} = useTranslation();

    const {auth} = useLogin();

    return (
        <View className="flex-1 items-center justify-center">
            <View className="flex flex-col items-start">
                <Text className="text-white text-[30px] border-b border-white pb-1 font-plex-regular">
                    {t('login.header')}
                </Text>
                <GreenFilledButton
                    className="mt-6 flex flex-row pr-0 py-4 pl-8 items-center"
                    onPress={auth}>
                    <Text className="font-plex-bold text-[30px]">
                        {t('login.button')}
                    </Text>
                    <RightArrow height={45} className="px-4" />
                </GreenFilledButton>
            </View>
        </View>
    );
};

export default LoginScreen;
