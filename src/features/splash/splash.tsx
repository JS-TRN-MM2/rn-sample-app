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
      <Text style={styles.greeting}>React Native Sample App</Text>
      <View style={styles.listRow}>
        <Text style={styles.listBullet}>{'\u2022'}</Text>
        <Text style={styles.listItem}>TypeScript</Text>
      </View>
      <View style={styles.listRow}>
        <Text style={styles.listBullet}>{'\u2022'}</Text>
        <Text style={styles.listItem}>React Navigation 6</Text>
      </View>
      <View style={styles.listRow}>
        <Text style={styles.listBullet}>{'\u2022'}</Text>
        <Text style={styles.listItem}>Redux</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Routes.MainNav)}>
        <Text style={styles.buttontext}>Enter the App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
