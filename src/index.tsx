import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './redux/store/store';
import { NavigationContainer } from '@react-navigation/native';

import FirstNav from './navigation/first-nav';
import MainNav from './navigation/main-nav';

import { AppBootstrapComponent } from './core';

const App = (): React.ReactElement => {
  const showSplash = true;
  //const isAuth = true;
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
