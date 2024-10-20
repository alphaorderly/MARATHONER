import {FC} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopLine from './TopLine';

export type TopLineDeco = {
    height: string;
    content?: string;
};

type TopLineDecorationProps = {
    decorations: TopLineDeco[];
};

const TopLineDecoration: FC<TopLineDecorationProps> = ({decorations}) => {
    return (
        <SafeAreaView>
            <View className="absolute top-0 left-0 right-0 flex flex-row justify-evenly">
                {decorations.map((decoration, index) => (
                    <TopLine
                        key={index}
                        height={decoration.height}
                        content={decoration.content}
                    />
                ))}
            </View>
        </SafeAreaView>
    );
};

export default TopLineDecoration;
