import React from 'react';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import GreenFilledButton from '~/components/Button/Filled/GreenFilledButton';
import RightArrowSVG from '~/assets/images/icons/goliath_btn_arrow.svg';
import useLogin from '~/hooks/Login/useLogin';
import TopLineDecoration, {
    TopLineDeco,
} from '~/components/Decoration/Line/TopLineDecoration';
import MarathonLogo from '~/assets/images/logo/gol_icon.svg';
import CornerPointCard from '~/components/Card/Bordered/CornerPointCard';
import DiagonalPattern from '~/components/Decoration/Pattern/DiagonalPattern';
import B from '~/components/Utility/Text/B';

const LoginScreen: FC = () => {
    const {t} = useTranslation();
    const {auth} = useLogin();

    const topdeco: TopLineDeco[] = [
        {height: 'h-[40px]'},
        {height: 'h-[25px]', content: '98123'},
        {height: 'h-[35px]'},
        {height: 'h-[30px]', content: 'AEE'},
        {height: 'h-[45px]'},
    ];

    return (
        <>
            <TopLineDecoration decorations={topdeco} />
            <CornerPointCard
                color="#af59a5"
                size={10}
                className="w-52 h-20 absolute top-44 left-12 p-4 opacity-50">
                <Text className="text-light-purple font-plex-regular text-sm">
                    - NEED AUTHENTICATION...
                </Text>
                <Text className="text-light-purple font-plex-regular text-sm">
                    - AT.THIS...
                </Text>
                <Text className="text-light-purple font-plex-regular text-sm">
                    - PLACE/APP/<B>MOMENT</B>
                </Text>
            </CornerPointCard>
            <DiagonalPattern
                className="h-20 w-52 opacity-60 self-start absolute top-2 left-12"
                color="#af59a5"
                space={10}
                stripesWidth={4}
            />
            <View className="flex-1 items-center justify-center flex flex-col">
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
