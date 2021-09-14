/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as SQLite from 'expo-sqlite';

export const initTimerSvc = (db) => {
  console.log('made it to initTimerSvc');

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE IF EXISTS MTBL_MYDAY', []);
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS MTBL_MYDAY (id INTEGER PRIMARY KEY NOT NULL, timestamp time default (strftime('%s', 'now')), taskstate TEXT, userId INTEGER);",
        [],
      );
    });
  });
  return promise;
};

export const insertTime = (taskstate, userId) => {
  console.log('made it to insertTime');
  const db = SQLite.openDatabase('rn-sample.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO MTBL_MYDAY (taskstate, userId) VALUES (?, ?)',
        [taskstate, userId],
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
export const selectAllTimes = () =>
{
  const db = SQLite.openDatabase('rn-sample.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM MTBL_MYDAY',
        [],
        (_, result) => {
          //console.log('results are', result);
          //let myDayData = result.rows;
          //console.log('mydaydata is ',myDayData);
          resolve(result);
        },
        (_, err) => {
          console.log('Add row to MTBL_MYDAY failed');
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const deleteAllTimes = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM MTBL_MYDAY',
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
