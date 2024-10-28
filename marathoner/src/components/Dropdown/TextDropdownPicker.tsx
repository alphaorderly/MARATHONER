import React, {FC, useState} from 'react';
import {Pressable, Text, View, ViewProps} from 'react-native';
import ArrowDown from '~/assets/images/icons/goliath_select_arrow_down.svg';
import DiagonalPattern from '../Decoration/Pattern/DiagonalPattern';

export type TextDropdownItem = {
    label: string;
    value: string | number | boolean;
};

type TextDropdownPickerProps = {
    items: TextDropdownItem[];
    currentValue: string | number | boolean;
    onChange: (value: string | number | boolean) => void;
    textColor?: string;
    borderColor?: string;
    sizeClassName?: string;
    fontSize?: number;
} & ViewProps;

const TextDropdownPicker: FC<TextDropdownPickerProps> = ({
    items,
    currentValue,
    onChange,
    fontSize = 16,
    borderColor = 'white',
    sizeClassName = 'w-40',
    ...props
}) => {
    const [open, setOpen] = useState(false);

    const currentLabel = items.find(
        (item) => item.value === currentValue,
    )?.label;

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <View className="relative z-10" {...props}>
            <Pressable
                onPress={handleOpen}
                className={`border px-4 py-2 flex-row justify-between items-center flex gap-4 ${sizeClassName}`}
                style={{
                    borderColor: borderColor,
                }}>
                <Text
                    className="text-white font-plex-regular"
                    style={{
                        fontSize: fontSize,
                    }}>
                    {currentLabel}
                </Text>
                {open ? (
                    <ArrowDown
                        width={20}
                        height={20}
                        style={{
                            transform: [{rotate: '180deg'}],
                        }}
                    />
                ) : (
                    <ArrowDown fill="white" width={20} height={20} />
                )}
            </Pressable>
            {open && (
                <View
                    className={`absolute top-full mt-2 flex flex-col border divide-y divide-gray-700 animate-from-top z-10 bg-background ${sizeClassName}`}
                    style={{
                        borderColor: borderColor,
                    }}>
                    {items.map((item, index) => (
                        <React.Fragment
                            key={item.label + item.value.toLocaleString()}>
                            <Pressable
                                onPress={() => {
                                    onChange(item.value);
                                    setOpen(false);
                                }}
                                className="flex flex-row justify-between items-center">
                                <Text
                                    className="text-white font-plex-regular px-4 py-2"
                                    style={{
                                        fontSize: fontSize,
                                    }}>
                                    {item.label}
                                </Text>
                                {currentValue === item.value && (
                                    <DiagonalPattern
                                        className="h-full w-4"
                                        color="white"
                                        space={4}
                                    />
                                )}
                            </Pressable>
                            {index !== items.length - 1 && (
                                <View
                                    className="h-px"
                                    style={{
                                        backgroundColor: borderColor,
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </View>
            )}
        </View>
    );
};

export default TextDropdownPicker;
