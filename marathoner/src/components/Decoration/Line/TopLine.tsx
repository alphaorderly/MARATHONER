import {FC} from 'react';
import {Text, View} from 'react-native';

type TopLineProps = {
    content?: string;
    height: string;
};

const TopLine: FC<TopLineProps> = ({content, height}) => {
    return (
        <View className="flex flex-row gap-2 items-start flex-1">
            <View className={`bg-vivid-green ${height} w-[1px]`} />
            {content && (
                <Text className="text-sm text-light-green font-plex-light">
                    {content}
                </Text>
            )}
        </View>
    );
};

export default TopLine;
