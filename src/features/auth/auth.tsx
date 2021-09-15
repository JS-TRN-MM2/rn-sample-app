import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ParamListBase } from '@react-navigation/routers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
