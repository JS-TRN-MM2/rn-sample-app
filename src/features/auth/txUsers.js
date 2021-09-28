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
      console.log('made it to initUserSvc');
      tx.executeSql('DROP TABLE IF EXISTS MTBL_USERS', []);
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS MTBL_USERS (id INTEGER PRIMARY KEY NOT NULL, email TEXT, username TEXT, password TEXT);',
        [],
      );

      tx.executeSql('DROP TABLE IF EXISTS MTBL_LOGGED_IN_USER', []);
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS MTBL_LOGGED_IN_USER (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, username TEXT); ',
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

export const insertNewUser = (email, username, password) => {
  const db = SQLite.openDatabase('rn-sample-app.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log('made it to insertNewUser');
      tx.executeSql(
        'INSERT INTO MTBL_USERS (email, username, password) VALUES (?, ?, ?);',
        [email, username, password],
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

export const insertAuthUser = (userEmail, userUsername) => {
  const db = SQLite.openDatabase('rn-sample-app.db');

  const promise = new Promise((resolve, reject) => {
    console.log('made it inside promise', userEmail + ' ' + userUsername);
    db.transaction((tx) => {
      console.log('made it into tx');
      tx.executeSql(
        'INSERT INTO MTBL_LOGGED_IN_USER (email, username) VALUES (?, ?);',
        [userEmail, userUsername],
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

export const fetchAllUsers = async () => {
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

export const fetchSelectedUser = async (userName, passWord) => {
  const db = SQLite.openDatabase('rn-sample-app.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log('inside tx:, userName, passWord', userName, passWord);
      tx.executeSql(
        'SELECT * FROM MTBL_USERS WHERE username = ? and password = ?',
        [userName, passWord],
        (tx, results) => {
          const { rows } = results;
          console.log('results', results);
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
        'SELECT email, username FROM MTBL_LOGGED_IN_USER',
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
  const db = SQLite.openDatabase('rn-sample-app.db');
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

export const updateUserPassword = (password, id) => {
  const db = SQLite.openDatabase('rn-sample-app.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE MTBL_USERS set password=? where id=?',
        [password, id],
        (_, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('User updated successfully');
          }
          resolve(results);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
