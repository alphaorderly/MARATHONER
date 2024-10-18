import {styled} from 'nativewind';
import React, {FC} from 'react';
import {Pressable, PressableProps} from 'react-native';

type GreenFilledButtonProps = PressableProps;

const GreenFilledButton: FC<GreenFilledButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Pressable className={`bg-vivid-green ${className}`} {...props}>
            {children}
        </Pressable>
    );
};

export default styled(GreenFilledButton, {
    props: {
        className: true,
    },
});
