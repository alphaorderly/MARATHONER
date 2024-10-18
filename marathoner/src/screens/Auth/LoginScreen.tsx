import React from 'react';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import GreenFilledButton from '~/components/Button/Filled/GreenFilledButton';
import RightArrowSVG from '~/assets/images/icons/goliath_btn_arrow.svg';
import useLogin from '~/hooks/Login/useLogin';
import TopLineDecoration from '~/components/Decoration/TopLineDecoration';
import MarathonLogo from '~/assets/images/logo/gol_icon.svg';

const LoginScreen: FC = () => {
    const {t} = useTranslation();
    const {auth} = useLogin();

    return (
        <>
            <TopLineDecoration />
            <View className="flex-1 items-center justify-center">
                <View className="flex flex-col items-start border-t-4 pt-4 border-white">
                    <MarathonLogo height={60} width={60} />
                    <Text className="text-white text-sm font-plex-light mt-4">
                        {t('login.body')}
                    </Text>
                    <Text className="text-white text-3xl border-b border-white pb-1 font-plex-regular self-stretch">
                        {t('login.header')}
                    </Text>
                    <GreenFilledButton
                        className="mt-6 flex flex-row px-2 pr-8 items-center gap-6"
                        onPress={auth}>
                        <Text className="font-plex-bold text-5xl">
                            {t('login.button')}
                        </Text>
                        <View className="animate-to-right">
                            <RightArrowSVG height={45} width={45} />
                        </View>
                    </GreenFilledButton>
                </View>
            </View>
        </>
    );
};

export default LoginScreen;
