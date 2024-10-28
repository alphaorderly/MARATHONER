import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';

const SearchResult = () => {
    const params = useRoute().params as {searchText: string};

    return (
        <View>
            <Text>Search Result: {params.searchText}</Text>
        </View>
    );
};

export default SearchResult;
