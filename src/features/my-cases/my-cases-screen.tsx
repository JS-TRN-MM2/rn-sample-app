import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button as CustomButton } from '../../core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MyCasesStackParamList, Routes } from '../../../types';
import styles from './styles';

import casesteps from './case-steps';

type myCasesScreenProp = {
  navigation: NativeStackNavigationProp<MyCasesStackParamList, Routes.MyCasesScreen>;
};

const MyCasesScreen: React.FC<myCasesScreenProp> = ({ navigation }) => {
  const screen = Dimensions.get('window');

  return (
    <View style={styles.screen}>
      <View
        style={{
          width: screen.width,
          height: screen.height,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <Text
          style={{
            paddingTop: 48,
            paddingBottom: 8,
            textAlign: 'center',
            fontSize: 40,
            color: '#CCCCCC',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
        >
          Case Steps
        </Text>
        <View style={{ marginHorizontal: 24, paddingTop: 12 }}>
          {casesteps.map((casestep) => {
            return (
              <CustomButton
                key={casestep.step}
                title={casestep.step}
                onPress={() =>
                  navigation.navigate(Routes.MyCasesModal, {
                    step: casestep.step,
                    desc: casestep.desc,
                  })
                }
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default MyCasesScreen;
