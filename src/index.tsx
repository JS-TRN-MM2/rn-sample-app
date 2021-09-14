import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import * as SQLite from 'expo-sqlite';
import store from './app/store';
import { NavigationContainer } from '@react-navigation/native';

import FirstNav from './navigation/first-nav';
import MainNav from './navigation/main-nav';


import { initTimerSvc } from './utils/txTimer';
import { initLocationSvc } from './utils/txLocations';

import { AppBootstrapComponent } from './core';

const App = (): React.ReactElement => {
  const showSplash = true;
  //const isAuth = true;
  useEffect(() => {
    const db = SQLite.openDatabase('rn-sample.db');
    void initTimerSvc(db);
    void initLocationSvc(db);
  }, [] );
  
  return (
    <Provider store={store}>
      <AppBootstrapComponent>
        <PaperProvider>
          <NavigationContainer>
            {/*{showSplash ? <SplashScreen /> : isAuth ? <MainNav /> : <AuthScreen />}*/}
            {showSplash ? <FirstNav /> : <MainNav />}
          </NavigationContainer>
        </PaperProvider>
      </AppBootstrapComponent>
    </Provider>
  );
};

export default App;
