/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Routes } from '../../../types';

import styles from './styles';
import { ParamListBase } from '@react-navigation/routers';

export interface SplashScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>;
}
const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Hello World!</Text>
      <Image source={require('@assets/splash.png')} style={{ height: 150, width: 150 }} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Routes.MainNav)}>
        <Text style={styles.buttontext}>Enter the Harbor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
