import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavStackParamList, Routes } from '../../../types';

import styles from './styles';

type settingsScreenProps = {
  navigation: NativeStackNavigationProp<MainNavStackParamList, Routes.SettingsScreen>;
};

const SettingsScreen: React.FC<settingsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen goes here</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default SettingsScreen;
