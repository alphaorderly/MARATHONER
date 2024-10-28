import {FC, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {
    TextInput,
    TextInputProps,
    View,
    InputAccessoryView,
    Platform,
    TouchableOpacity,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import createUUID from '~/utils/random/createUUID';

type SearchInputProps = {
    search: string;
    setSearch: (search: string) => void;
} & TextInputProps;

const inputAccessoryViewID = createUUID();

const SearchInput: FC<SearchInputProps> = ({
    className,
    search,
    setSearch,
    ...props
}) => {
    const {t} = useTranslation();
    const inputRef = useRef<TextInput>(null);

    return (
        <View className="relative">
            <TextInput
                className={`border border-white p-2 text-white placeholder:text-gray-400 text-xl pr-11 ${className}`}
                placeholder={t('component.input.search_placeholder')}
                value={search}
                onChangeText={setSearch}
                ref={inputRef}
                returnKeyLabel="닫기"
                returnKeyType="done"
                onSubmitEditing={() => inputRef.current?.blur()}
                inputAccessoryViewID={
                    Platform.OS === 'ios' ? inputAccessoryViewID : undefined
                }
                {...props}
            />
            {Platform.OS === 'ios' && (
                <InputAccessoryView nativeID={inputAccessoryViewID}>
                    <View className="flex items-end p-2.5">
                        <TouchableOpacity
                            onPress={() => {
                                setSearch('');
                                inputRef.current?.blur();
                            }}
                            className="px-2 py-2">
                            <Text className="text-vivid-gray bg-light-background text-lg font-plex-bold p-2">
                                닫기
                            </Text>
                        </TouchableOpacity>
                    </View>
                </InputAccessoryView>
            )}
            {search && (
                <Icon
                    name="closesquare"
                    size={22}
                    color="white"
                    className="absolute right-3 top-3"
                    onPress={() => {
                        setSearch('');
                        inputRef.current?.blur();
                    }}
                />
            )}
        </View>
    );
};

export default SearchInput;
