/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyClosetStackScreen from './MyClosetStackScreen';
import ShareStackScreen from './ShareStackScreen';
import AddItemStackScreen from './AddItemStackScreen';
import DonateStackScreen from './DonateStackScreen';
import MoreStackScreen from './MoreStackScreen';

import { MainTabStackParamList, Routes } from '../../types';

const TabsNavStack = createBottomTabNavigator<MainTabStackParamList>();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const MainTabScreen = () => {
  const { Navigator, Screen } = TabsNavStack;

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          { position: 'absolute' },
          { bottom: 25 },
          { left: 20 },
          { right: 20 },
          { elevation: 0 },
          { backgroundColor: '#ffffff' },
          { borderRadius: 15 },
          { height: 90 },
        ],
        ...styles.shadow,
      }}
    >
      <Screen
        name="My Closet"
        component={MyClosetStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/noun_dress_747204.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>CLOSET</Text>
            </View>
          ),
        }}
      />
      <Screen
        name={Routes.ShareStackScreen}
        component={ShareStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/noun_women_3971737.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>SHARE</Text>
            </View>
          ),
        }}
      />
      <Screen
        name={Routes.AddItemStackScreen}
        component={AddItemStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icons/noun_Plus_12862.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Screen
        name={Routes.DonateStackScreen}
        component={DonateStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/noun_give_1419536.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>DONATE</Text>
            </View>
          ),
        }}
      />
      <Screen
        name={Routes.MoreStackScreen}
        component={MoreStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/noun_more_1559600.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>More</Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default MainTabScreen;
