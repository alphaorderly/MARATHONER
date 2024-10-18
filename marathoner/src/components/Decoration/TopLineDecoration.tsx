import {FC} from 'react';
import {View} from 'react-native';

const TopLineDecoration: FC = () => {
    return (
        <View className="absolute top-0 left-0 right-0 flex flex-row justify-around">
            <View className="bg-vivid-green h-[40px] w-[1px]" />
            <View className="bg-vivid-green h-[60px] w-[1px]" />
            <View className="bg-vivid-green h-[35px] w-[1px]" />
            <View className="bg-vivid-green h-[42px] w-[1px]" />
            <View className="bg-vivid-green h-[28px] w-[1px]" />
        </View>
    );
};

export default TopLineDecoration;
