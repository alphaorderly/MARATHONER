import {FC} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const TopLineDecoration: FC = () => {
    return (
        <SafeAreaView>
            <View className="absolute top-[0px] left-0 right-0 flex flex-row justify-around">
                <View className="bg-vivid-green h-[40px] w-[1px]" />
                <View className="bg-vivid-green h-[60px] w-[1px]" />
                <View className="bg-vivid-green h-[35px] w-[1px]" />
                <View className="bg-vivid-green h-[42px] w-[1px]" />
                <View className="bg-vivid-green h-[28px] w-[1px]" />
            </View>
        </SafeAreaView>
    );
};

export default TopLineDecoration;
