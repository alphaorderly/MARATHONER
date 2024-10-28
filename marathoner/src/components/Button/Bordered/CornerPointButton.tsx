import {FC, ReactNode} from 'react';
import {
    Pressable,
    DimensionValue,
    View,
    Text,
    PressableProps,
} from 'react-native';

type CornerPointButtonProps = {
    /**
     * Size of the corner.
     * Example: '20px'
     */
    size: DimensionValue;
    /**
     * Color of the corner.
     * Example: 'black', '#000'
     */
    color: string;
    /**
     * Button label or content.
     */
    label?: string;
} & PressableProps;

/**
 * Button component with angular lines on the top-left and bottom-right corners.
 * @returns JSX.Element
 */
const CornerPointButton: FC<CornerPointButtonProps> = ({
    size,
    children,
    label,
    color,
    className,
    ...props
}: CornerPointButtonProps) => {
    return (
        <Pressable className={`relative ${className}`} {...props}>
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
            {label && <Text>{label}</Text>}
            {children as ReactNode}
        </Pressable>
    );
};

export default CornerPointButton;
