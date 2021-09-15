import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Header;
