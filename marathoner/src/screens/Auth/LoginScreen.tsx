import React from 'react';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
} from 'react-native-reanimated';
import GreenFilledButton from '~/components/Button/Filled/GreenFilledButton';
import RightArrowSVG from '~/assets/images/icons/goliath_btn_arrow.svg';
import useLogin from '~/hooks/Login/useLogin';
import TopLineDecoration from '~/components/Decoration/TopLineDecoration';
import MarathonLogo from '~/assets/images/logo/gol_icon.svg';

const LoginScreen: FC = () => {
    const {t} = useTranslation();
    const {auth} = useLogin();

    // Reanimated shared value for the arrow's position
    const translateX = useSharedValue(0);

    // Animated style for RightArrow
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}],
        };
    });

    // Start the animation: move right and reset to the left
    React.useEffect(() => {
        translateX.value = withRepeat(
            withSequence(
                withTiming(10, {duration: 1000}), // Move right
                withTiming(0, {duration: 0}), // Reset to the left
            ),
            -1, // Infinite loop
            false, // Don't reverse
        );
    }, [translateX]);

    return (
        <View className="flex-1 items-center justify-center">
            <TopLineDecoration />
            <View className="flex flex-col items-start border-t-4 pt-4 border-white">
                <MarathonLogo className="mb-4" height={60} width={60} />
                <Text className="text-white text-[12px] font-plex-light">
                    {t('login.body')}
                </Text>
                <Text className="text-white text-[30px] border-b border-white pb-1 font-plex-regular">
                    {t('login.header')}
                </Text>
                <GreenFilledButton
                    className="mt-6 flex flex-row px-2 items-center"
                    onPress={auth}>
                    <Text className="font-plex-bold text-[50px]">
                        {t('login.button')}
                    </Text>
                    <Animated.View style={animatedStyle}>
                        <RightArrowSVG
                            height={45}
                            width={45}
                            className="ml-10 mr-4"
                        />
                    </Animated.View>
                </GreenFilledButton>
            </View>
        </View>
    );
};

export default LoginScreen;
