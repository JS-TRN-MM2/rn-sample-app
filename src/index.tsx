/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import { Platform, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
//import { colors } from 'react-native-elements';

import * as SQLite from 'expo-sqlite';
import store from './app/store';
import { NavigationContainer } from '@react-navigation/native';

import FirstNav from './navigation/first-nav';
import MainNavIos from './navigation/main-nav.ios';
import MainNavAndroid from './navigation/main-nav.android';

import { initTimerSvc } from './utils/txTimer';
import { initLocationSvc } from './utils/txLocations';

import { AppBootstrapComponent } from './core';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = (): React.ReactElement => {
  const showSplash = true;
  const plat = Platform.OS;
  //const isAuth = true;
  useEffect(() => {
    const db = SQLite.openDatabase('rn-sample.db');
    void initTimerSvc(db);
    void initLocationSvc(db);
  }, []);
  console.log('what is the Platform', plat);

  return (
    <Provider store={store}>
      <AppBootstrapComponent>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            {/*{showSplash ? <SplashScreen /> : isAuth ? <MainNav /> : <AuthScreen />}*/}
            {/*} {showSplash ? <FirstNav /> : <MainNavIos />}*/}
            {showSplash ? (
              plat === 'android' ? (
                <MainNavAndroid />
              ) : (
                <MainNavIos />
              )
            ) : (
              <View>
                <Text>MISTAKE</Text>
              </View>
            )}
          </NavigationContainer>
        </PaperProvider>
      </AppBootstrapComponent>
    </Provider>
  );
};

export default App;
