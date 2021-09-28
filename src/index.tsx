import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import store from './app/store';
import { initUserSvc, insertNewUser } from './features/auth/txUsers';

import { RootNav } from './navigation/RootNav';

import * as SQLite from 'expo-sqlite';

const App = (): React.ReactElement => {
  useEffect(() => {
    const db = SQLite.openDatabase('rn-sample-app.db');
    void initUserSvc(db);
    void insertNewUser('user1@email.com', 'user1', 'password1');
    void insertNewUser('user2@email.com', 'user2', 'password2');
    void insertNewUser('user3@email.com', 'user3', 'password3');
    void insertNewUser('user4@email.com', 'user4', 'password4');
  }, []);

  return (
    <Provider store={store}>
      <RootNav />
    </Provider>
  );
};

export default App;
