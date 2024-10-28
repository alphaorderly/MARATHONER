import {FC} from 'react';
import {View} from 'react-native';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';

type WhiteBorderCardProps = {} & ViewProps;

const WhiteBorderCard: FC<WhiteBorderCardProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <View className={`border border-white ${className}`} {...props}>
            {children}
        </View>
    );
};

export default WhiteBorderCard;
