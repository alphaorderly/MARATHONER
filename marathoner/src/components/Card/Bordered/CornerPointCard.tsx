import {FC} from 'react';
import {DimensionValue, View, ViewProps} from 'react-native';

type CornerPointCardProps = {
    /**
     * size of the corner
     * Example: '20px'
     */
    size: DimensionValue;
    /**
     * color of the corner
     * Example: 'black', '#000'
     */
    color: string;
} & ViewProps;

/**
 * component with angular line on the left top and right bottom corner
 * @returns
 */
const CornerPointCard: FC<CornerPointCardProps> = ({
    size,
    children,
    className,
    color,
    ...props
}: CornerPointCardProps) => {
    return (
        <View className={`relative ${className}`} {...props}>
            <View
                className={
                    'absolute top-0 left-0 border-t border-l border-solid'
                }
                style={{
                    height: size,
                    width: size,
                    borderColor: color,
                }}
            />
            <View
                className={
                    'absolute bottom-0 right-0 border-b border-r border-solid'
                }
                style={{
                    height: size,
                    width: size,
                    borderColor: color,
                }}
            />
            {children}
        </View>
    );
};

export default CornerPointCard;
