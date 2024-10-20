import {useResetAtom} from 'jotai/utils';
import {FC} from 'react';
import {Text, View} from 'react-native';
import HexagonCard from '~/components/Card/Filled/HexagonCard';
import authAtom from '~/store/jotai/authAtom';

const MainScren: FC = () => {
    const resetAuth = useResetAtom(authAtom);

    return (
        <View
            className="flex-1 flex flex-col justify-center items-center"
            onTouchStart={resetAuth}>
            <HexagonCard size={50} color="#5d1bcf">
                <Text className="text-white font-aldrich text-2xl">A</Text>
            </HexagonCard>
        </View>
    );
};

export default MainScren;
