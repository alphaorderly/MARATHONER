import React, {FC} from 'react';
import {Pressable, PressableProps} from 'react-native';

type GreenFilledButtonProps = {colorClass: string} & PressableProps;

const GreenFilledButton: FC<GreenFilledButtonProps> = ({
    children,
    className,
    colorClass,
    ...props
}) => {
    return (
        <Pressable className={`${colorClass} ${className}`} {...props}>
            {children}
        </Pressable>
    );
};

export default GreenFilledButton;
