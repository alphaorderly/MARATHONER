import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {FC} from 'react';
import {Text, View} from 'react-native';
import DiagonalPattern from '../Decoration/Pattern/DiagonalPattern';
import WhiteBorderButton from '../Button/Bordered/WhiteBorderedButton';
import DrawerUserProfile from '../User/DrawerUserProfile';

const MainDrawer: FC<DrawerContentComponentProps> = ({
    state,
    navigation,
    descriptors,
}) => {
    const currentRouteIndex = state.index;

    return (
        <View className="bg-light-background flex flex-col h-full">
            <DrawerUserProfile />
            <View className="flex-1 p-4 flex flex-col gap-4">
                {state.routes.map((route, index) => {
                    const title =
                        descriptors[route.key]?.options?.title || route.name;

                    return (
                        <WhiteBorderButton
                            key={route.name}
                            className="flex flex-row"
                            onPress={() => {
                                console.log(JSON.stringify(state, null, 4));
                                navigation.navigate(route.name);
                            }}>
                            <DiagonalPattern
                                className="h-full w-4"
                                color={
                                    index === currentRouteIndex
                                        ? 'green'
                                        : 'white'
                                }
                                space={4}
                            />
                            <Text className="text-white text-2xl font-plex-regular p-2">
                                {title}
                            </Text>
                        </WhiteBorderButton>
                    );
                })}
            </View>
        </View>
    );
};

export default MainDrawer;
