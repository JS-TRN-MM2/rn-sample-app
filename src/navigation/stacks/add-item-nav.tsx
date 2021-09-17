/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddItemStackParamList, Routes } from '../../../types';

import AddItemScreen from '../../features/add-item';

const AddItemStack = createNativeStackNavigator<AddItemStackParamList>();

const AddItemNav = (): React.ReactElement => {
  const { Navigator, Screen } = AddItemStack;

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Screen name={Routes.AddItemScreen} component={AddItemScreen} />
    </Navigator>
  );
};

export default AddItemNav;
