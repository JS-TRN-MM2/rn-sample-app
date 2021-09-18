/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import SettingsScreen from '../screens/SettingsScreen';
import EditSettingsScreen from '../screens/EditSettingsScreen';
import { SettingsStackParamList, Routes } from '../../types';

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Ionicons.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditSettings')}
              />
            </View>
          ),
        }}
      />
      <SettingsStack.Screen
        name="EditSettings"
        options={{
          title: 'Edit Settings',
        }}
        component={EditSettingsScreen}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
