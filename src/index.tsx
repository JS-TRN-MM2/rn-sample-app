/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState, useMemo } from 'react';
import { Platform, View, Text, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import { DrawerContent } from './features/DrawerContent';
import { Provider } from 'react-redux';
import store from './app/store';
import { initUserSvc, insertNewUser, fetchUser } from './features/auth/txUsers';

import MainTabScreen from './navigation/MainTabScreen';
import SettingsScreen from './features/SettingsScreen';

import RootStackScreen from './navigation/RootStackScreen';

import * as SQLite from 'expo-sqlite';

const Drawer = createDrawerNavigator();

const App = (): React.ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const db = SQLite.openDatabase('rn-sample-app.db');
    //void initUserSvc(db);
    //void insertNewUser('user1@email.com', 'user1', 'password1', 'token1231');
    //void insertNewUser('user2@email.com', 'user2', 'password2', 'token1232');
    //void insertNewUser('user3@email.com', 'user3', 'password3', 'token1233');
    //void insertNewUser('user4@email.com', 'user4', 'password4', 'token1234');
    fetchUser()
      .then((len) => {
        if (len > 0) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error('what is the error', error);
      });
  }, []);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  /*

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
*/

  //console.log('currentAuthUser', currentAuthUser);
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          {isLoggedIn ? (
            <Drawer.Navigator drawerContent={(props: any) => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen navigation={undefined} />
          )}
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

export default App;
