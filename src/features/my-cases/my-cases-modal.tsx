import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { MyCasesStackParamList, Routes } from 'types';

type myCasesInfoScreenProps = {
  navigation: NativeStackNavigationProp<MyCasesStackParamList, Routes.MyCasesModal>;
  route: RouteProp<MyCasesStackParamList, Routes.MyCasesModal>;
};

const MyCasesModal: React.FC<myCasesInfoScreenProps> = ({ route, navigation }) => {
  const screen = Dimensions.get('window');
  const {
    params: { step, desc },
  } = route;

  return (
    <>
      <View>
        <View
          style={{
            width: screen.width,
            height: screen.height,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            paddingTop: 48,
            paddingBottom: 100,
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 40, color: '#FFF' }}>{step}</Text>

          <View style={{ margin: 24 }}>
            <Text style={{ color: '#fff' }}>{desc}</Text>
            <Text style={{ color: '#fff', textAlign: 'center', marginTop: 4 }}></Text>
          </View>

          <TouchableOpacity
            style={{ width: '100%' }}
            onPress={() => {
              return navigation.goBack();
            }}
          >
            <Text
              style={{
                color: '#31AAB7',
                fontSize: 28,
                textAlign: 'center',
              }}
            >
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default MyCasesModal;
