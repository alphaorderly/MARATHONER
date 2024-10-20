import {FC} from 'react';
import {Text, TextProps} from 'react-native';

type BProps = TextProps;

const B: FC<BProps> = (props) => (
    <Text className="font-plex-bold">{props.children}</Text>
);

export default B;
