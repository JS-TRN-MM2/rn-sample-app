import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}

const ShareClosetScreen: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.screen}>
      <Text>Share Closet Items goes here</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default ShareClosetScreen;
