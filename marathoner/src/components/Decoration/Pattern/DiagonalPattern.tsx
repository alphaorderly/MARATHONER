/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

type DiagonalPatternProps = {
    /**
     * Width of the stripes
     * Example: 1
     */
    stripesWidth?: number;
    /**
     * Color of the stripes
     * Example: 'red'
     */
    color: string;
    /**
     * How much the stripes should be tilted
     * Example: '45deg'
     */
    tilt?: string;
    /**
     * How much space between each stripe
     * Example: 10
     */
    space?: number;
    /**
     * Class name for the children
     */
    childrenClassName?: string;
} & ViewProps;

const DiagonalPattern: FC<DiagonalPatternProps> = ({
    stripesWidth = 1,
    color,
    className,
    tilt = '45deg',
    space = 2,
    children,
    childrenClassName,
    ...props
}) => {
    const stripes = Array.from({length: 1000});

    return (
        <View className={`relative overflow-hidden ${className}`} {...props}>
            {stripes.map((_, index) => (
                <View
                    key={index}
                    className="absolute"
                    style={{
                        left: (index - 1000 / 2) * space,
                        height: '200%',
                        top: '-50%',
                        transform: [{rotate: tilt}],
                        backgroundColor: color,
                        width: stripesWidth,
                    }}
                />
            ))}
            {children && (
                <View className={`${childrenClassName}`}>{children}</View>
            )}
        </View>
    );
};

export default DiagonalPattern;
