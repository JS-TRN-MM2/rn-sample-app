import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MyDayStackParamList, Routes } from '../../../types';

import { TimerComponent } from '../../core';

import styles from './styles';

type myDayScreenProp = {
  navigation: NativeStackNavigationProp<MyDayStackParamList, Routes.MyDayScreen>;
};

const MyDayScreen: React.FC<myDayScreenProp> = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate(Routes.MyDayInfoScreen)}>
        <Text style={styles.infoButtonText}>i</Text>
      </Button>
      <View style={styles.timerContainer}>
        <TimerComponent title="Timer Component" />
      </View>
    </View>
  );
};

export default MyDayScreen;
