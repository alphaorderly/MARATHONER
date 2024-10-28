/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, Pressable, View} from 'react-native';
import MainScreen from '~/screens/Main/MainScreen';
import BurgerIcon from '~/assets/images/icons/burger.png';
import SearchInput from '~/components/Search/SearchInput';
import MainDrawer from '~/components/Drawer/MainDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '~/screens/Setting/SettingScreen';
import {StackNavigationHelpers} from '@react-navigation/stack/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import SearchResult from '~/screens/Search/SearchResult';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HeaderIcon = () => (
    <View className="p-2 flex-shrink-0">
        <Image source={BurgerIcon} className="w-8 h-8 mx-2" />
    </View>
);

const HeaderTitle = ({navigation}: {navigation?: StackNavigationHelpers}) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View className="flex-1 justify-center px-2 w-full">
            <SearchInput
                className="w-full h-full"
                search={searchText}
                setSearch={setSearchText}
                onSubmitEditing={() => {
                    if (navigation && searchText) {
                        navigation.navigate('SearchResult', {searchText});
                    }
                }}
            />
        </View>
    );
};

const HeaderRight = ({navigation}: {navigation: StackNavigationHelpers}) => (
    <Pressable
        onPress={() => navigation.navigate('Setting')}
        className="mr-4 flex-shrink-0">
        <Icon name="setting" color="white" size={32} />
    </Pressable>
);

const MainDrawerNavigation = ({
    navigation,
}: {
    navigation: StackNavigationHelpers;
}) => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={MainDrawer}
            screenOptions={{
                headerShadowVisible: false,
                headerStyle: {backgroundColor: 'black'},

                headerBackgroundContainerStyle: {
                    display: 'flex',
                    flexDirection: 'row',
                },

                headerTitleContainerStyle: {
                    width: '100%',
                },

                headerTitle: () => <HeaderTitle navigation={navigation} />,
                headerLeft: () => <HeaderIcon />,
                headerRight: () => <HeaderRight navigation={navigation} />,
            }}>
            <Drawer.Screen
                name="Home"
                component={MainScreen}
                options={{title: '메인 화면'}}
            />
        </Drawer.Navigator>
    );
};

const StackBackbutton = ({
    navigation,
}: {
    navigation: StackNavigationHelpers;
}) => {
    return (
        <Pressable
            onPress={() => {
                navigation.goBack();
            }}>
            <Icon name="arrowleft" color="white" size={28} />
        </Pressable>
    );
};

const MainNavigation = () => (
    <Stack.Navigator
        screenOptions={({navigation}) => ({
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'IBMPlexSansKR-SemiBold',
                fontSize: 20,
            },
            headerShadowVisible: false,
            headerLeft: () => <StackBackbutton navigation={navigation} />,
        })}>
        <Stack.Screen
            name="MainDrawer"
            component={MainDrawerNavigation}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{title: '설정'}}
        />
        <Stack.Screen
            name="SearchResult"
            component={SearchResult}
            options={{title: '검색 결과'}}
        />
    </Stack.Navigator>
);

export default MainNavigation;
