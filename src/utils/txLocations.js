/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as SQLite from 'expo-sqlite';

export const initLocationSvc = (db) => {
  console.log('made it to initLocationSvc');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE IF EXISTS MTBL_LOCATIONS', []);
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS MTBL_LOCATIONS (id INTEGER PRIMARY KEY NOT NULL, timestamp time default (strftime('%s', 'now')), lat REAL, lng REAL, accuracy REAL, altitude REAL, speed REAL, heading REAL);",
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

export const insertLocation = (timestamp, lat, lng, accuracy, altitude, speed, heading) => {
  console.log('made it to insertLocation');
  const db = SQLite.openDatabase('rn-sample.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO MTBL_LOCATIONS (timestamp, lat, lng, accuracy, altitude, speed, heading) VALUES (?, ?, ?,?,?,?,?);',
        [timestamp, lat, lng, accuracy, altitude, speed, heading],
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

export const fetchLocations = () =>
{
  const db = SQLite.openDatabase('rn-sample.db');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM locations',
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
