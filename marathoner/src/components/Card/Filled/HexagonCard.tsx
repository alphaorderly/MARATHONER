import React from 'react';
import {View, ViewProps} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';

type HexagonCardProps = {
    size: number;
    color?: string;
    hexagonClassName?: string;
    contentClassName?: string;
} & ViewProps;

const HexagonCard: React.FC<HexagonCardProps> = ({
    size = 50,
    color = 'blue',
    hexagonClassName = '',
    contentClassName = '',
    children,
    ...props
}) => {
    // Calculate the hexagon dimensions
    const width = size * 2;
    const height = Math.sqrt(3) * size;

    // Center of the hexagon
    const cx = size;
    const cy = height / 2;

    // Calculate the points of the hexagon
    const points = Array.from({length: 6})
        .map((_, i) => {
            const angle = (Math.PI / 3) * i;
            const x = cx + size * Math.cos(angle);
            const y = cy + size * Math.sin(angle);
            return `${x},${y}`;
        })
        .join(' ');

    return (
        <View
            {...props}
            className={`relative ${hexagonClassName}`}
            style={{width, height}}>
            <Svg
                width={width}
                height={height}
                className="absolute top-0 left-0">
                <Polygon points={points} fill={color} />
            </Svg>
            <View
                className={`absolute inset-0 flex items-center justify-center ${contentClassName}`}>
                {children}
            </View>
        </View>
    );
};

export default HexagonCard;
