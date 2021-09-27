/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as SQLite from 'expo-sqlite';

export const initUserSvc = (db) => {
  //const db = SQLite.openDatabase('rn-sample-app.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE IF EXISTS MTBL_USERS', []);
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS MTBL_USERS (id INTEGER PRIMARY KEY NOT NULL, email TEXT, username TEXT, password TEXT, userToken TEXT);',
        [],
      );

      tx.executeSql('DROP TABLE IF EXISTS MTBL_LOGGED_IN_USER', []);
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS MTBL_LOGGED_IN_USER (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, username TEXT, password TEXT, userToken TEXT); ',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const insertNewUser = (email, username, password, userToken) => {
  console.log('made it to insertNewUser');
  const db = SQLite.openDatabase('rn-sample-app.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log('made it to tx', email, username, password, userToken);
      tx.executeSql(
        'INSERT INTO MTBL_USERS (email, username, password, userToken) VALUES (?, ?, ?,?);',
        [email, username, password, userToken],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const insertAuthUser = (email, username, password, userToken) => {
  const db = SQLite.openDatabase('rn-sample-app.db');
  console.log(
    'made it to insertAuthUser',
    email + ' ' + username + ' ' + password + '  ' + userToken,
  );
  const promise = new Promise((resolve, reject) => {
    console.log('made it inside promise');
    db.transaction((tx) => {
      console.log('made it into tx');
      tx.executeSql(
        'INSERT INTO MTBL_LOGGED_IN_USER (email, username, password, userToken) VALUES (?, ?, ?, ?);',
        [email, username, password, userToken],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const fetchUsers = async () => {
  const db = SQLite.openDatabase('rn-sample-app.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM MTBL_USERS',
        [],
        (tx, results) => {
          const { rows } = results;

          let userList = [];
          for (let i = 0; i < rows.length; i++) {
            userList.push({
              ...rows.item(i),
            });
          }

          resolve(userList);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const fetchUser = () => {
  const db = SQLite.openDatabase('rn-sample-app.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT email, username, password, userToken FROM MTBL_LOGGED_IN_USER',
        [],
        (_, result) => {
          var len = result.rows.length;
          resolve(len);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const deleteLoggedInUser = () => {
  const db = SQLite.openDatabase('rn-sample.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM MTBL_LOGGED_IN_USERS',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
