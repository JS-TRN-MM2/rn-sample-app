import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Button as CustomButton } from '../../core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MyClosetStackParamList, Routes } from '../../../types';

import closetItems from './my-closet-items';

type MyClosetScreenProp = {
  navigation: NativeStackNavigationProp<MyClosetStackParamList, Routes.MyClosetScreen>;
};

const MyClosetScreen: React.FC<MyClosetScreenProp> = ({ navigation }) => {
  const screen = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View
        style={{
          width: screen.width,
          height: screen.height,
          backgroundColor: '#91cbbd',
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
          Closet Items
        </Text>
        <View style={{ marginHorizontal: 24, paddingTop: 12 }}>
          {closetItems.map((item) => {
            return (
              <CustomButton
                key={item.step}
                title={item.step}
                onPress={() =>
                  navigation.navigate(Routes.MyClosetModal, {
                    step: item.step,
                    desc: item.desc,
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MyClosetScreen;
