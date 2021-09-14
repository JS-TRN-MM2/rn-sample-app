import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}

const MyApptsScreen: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.screen}>
      <Text>My Appts Screen goes here</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default MyApptsScreen;
