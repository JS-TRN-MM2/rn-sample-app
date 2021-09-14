import React from 'react';
import { View, Text } from 'react-native';
import { ParamListBase } from '@react-navigation/routers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';

export interface AuthScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase, 'AuthScreen'>;
}

const AuthScreen: React.FC<AuthScreenProps> = () => {
  return (
    <View style={styles.screen}>
      <Text>Auth Screen</Text>
    </View>
  );
};

export default AuthScreen;
