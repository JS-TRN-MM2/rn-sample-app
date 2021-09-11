import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import mydayinfo from './my-day-info';

import { MyDayStackParamList, Routes } from 'types';

type myDayInfoScreenProp = {
  navigation: NativeStackNavigationProp<MyDayStackParamList, Routes.MyDayInfoScreen>;
};

const MyDayInfoScreen: React.FC<myDayInfoScreenProp> = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            textAlign: 'center',
            fontSize: 20,
            color: '#CCCCCC',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
        >
          My Day Info
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: 24, paddingTop: 12 }}
        >
          {mydayinfo.map((item) => {
            return (
              <Button key={item.time}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 18,
                    color: '#31AAB7',
                  }}
                >
                  {item.event}:
                </Text>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 18,
                    color: '#31AAB7',
                  }}
                >
                  {item.time}
                </Text>
              </Button>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            return navigation.goBack();
          }}
        >
          <Text
            style={{
              color: '#31AAB7',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyDayInfoScreen;
