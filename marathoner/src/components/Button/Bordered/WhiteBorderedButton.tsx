import {FC} from 'react';
import {PressableProps, Pressable} from 'react-native';

type WhiteBorderButtonProps = {} & PressableProps;

const WhiteBorderButton: FC<WhiteBorderButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Pressable className={`border border-white ${className}`} {...props}>
            {children}
        </Pressable>
    );
};

export default WhiteBorderButton;
