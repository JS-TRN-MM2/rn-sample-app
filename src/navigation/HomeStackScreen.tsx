/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../features/HomeScreen';
import CardListScreen from '../features/CardListScreen';
import CardItemDetails from '../features/CardItemDetails';
import { HomeStackParamList, Routes } from '../../types';

import { useTheme, Avatar } from 'react-native-paper';
//import { View } from 'react-native-animatable';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'FoodFinder',
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
                    uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="CardItemDetails"
        component={CardItemDetails}
        options={({ route }) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
