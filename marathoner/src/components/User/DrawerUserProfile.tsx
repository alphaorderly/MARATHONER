import {useAtomValue} from 'jotai';
import {Text, View} from 'react-native';
import memberAtom from '~/store/jotai/memberAtom';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DrawerUserProfile = () => {
    const member = useAtomValue(memberAtom);

    if (member === null) {
        return null;
    }

    const discriminator = member.uniqueName.split('#')[1];

    const isPsn = member.psnDisplayName !== undefined;
    const isXbox = member.xboxDisplayName !== undefined;
    const isSteam = member.steamDisplayName !== undefined;

    return (
        <View className="flex flex-col p-4 gap-1">
            <Text className="text-black text-2xl bg-vivid-green font-plex-semibold p-2">
                {member.displayName}
            </Text>
            <View className="flex flex-row items-center justify-between">
                <Text className="text-light-gray text-lg font-plex-semibold">
                    #{discriminator}
                </Text>
                <View className="flex flex-row gap-2">
                    {isPsn && (
                        <Fontisto
                            name="playstation"
                            size={16}
                            color="#d7d7d7"
                        />
                    )}
                    {isXbox && (
                        <Fontisto name="xbox" size={16} color="#d7d7d7" />
                    )}
                    {isSteam && (
                        <Fontisto name="steam" size={16} color="#d7d7d7" />
                    )}
                </View>
            </View>
        </View>
    );
};

export default DrawerUserProfile;
