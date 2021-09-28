/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import { useTheme, Avatar } from 'react-native-paper';

import MyClosetScreen from '../features/MyClosetScreen';
import { DrawerContent } from '../features/DrawerContent';
import MyClosetModal from '../features/my-closet/my-closet-modal';
import { MyClosetDrawerStackParamList, Routes } from '../../types';

const MyClosetDrawerStack = createDrawerNavigator<MyClosetDrawerStackParamList>();
//const MyClosetStack = createNativeStackNavigator<MyClosetStackParamList>();

const MyClosetDrawerStackScreen = ({ navigation }): React.ReactElement => {
  const { colors } = useTheme();
  return (
    <MyClosetDrawerStack.Navigator
      drawerContent={(props: any) => <DrawerContent {...props} />}
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
      <MyClosetDrawerStack.Group>
        <MyClosetDrawerStack.Screen
          name={Routes.MyClosetScreen}
          component={MyClosetScreen}
          options={{
            title: 'Home',
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Ionicons.Button
                  name="ios-menu"
                  size={25}
                  color={colors.text}
                  backgroundColor={colors.background}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <Ionicons.Button
                  name="ios-search"
                  size={25}
                  color={colors.text}
                  backgroundColor={colors.background}
                  onPress={() => {}}
                />
                <TouchableOpacity
                  style={{ paddingHorizontal: 10, marginTop: 5 }}
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}
                >
                  <Avatar.Image
                    source={{
                      uri: 'https://reactjs.org/logo-og.png',
                    }}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </MyClosetDrawerStack.Group>
      <MyClosetDrawerStack.Group>
        <MyClosetDrawerStack.Screen name={Routes.MyClosetModal} component={MyClosetModal} />
      </MyClosetDrawerStack.Group>
    </MyClosetDrawerStack.Navigator>
  );
};

export default MyClosetDrawerStackScreen;
