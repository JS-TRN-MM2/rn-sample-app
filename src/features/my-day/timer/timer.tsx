/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/rootReducer';
import { setTimer } from './timerSlice';
import { setLocation } from './../locationSlice';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import { insertTime } from '../../../utils/txTimer';
import { insertLocation } from '../../../utils/txLocations';

import useLocation from '../../../hooks/useLocation';
import styles from './styles';
import stopImg from '../../../../assets/stopbutton.png';
import startImg from '../../../../assets/startbutton.png';

interface Props {
  title: string;
}

const Timer: React.FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const timerIsOn = useSelector((state: RootState) => state.timer.timerIsOn);
  const locServiceIsOn = useSelector((state: RootState) => state.location.locServiceIsOn);

  const handleSetTimer = () => {
    dispatch(setTimer());
    dispatch(setLocation());
    console.log('handleSetTimer: what is location', location);
    void insertLocation(
      location.timestamp,
      location.coords.latitude,
      location.coords.longitude,
      location.coords.accuracy,
      location.coords.altitude,
      location.coords.speed,
      location.coords.heading,
    );
    void insertTime('start', 'missy');
  };

  return (
    <View>
      <View>
        <View>
          <Text>This section is about Location</Text>
          <Text style={styles.genericText}>{locServiceIsOn.toString()}</Text>
        </View>
        <Text>This section is about Timer</Text>
        <Text style={styles.genericText}>{timerIsOn.toString()}</Text>
      </View>
      <View>
        {!timerIsOn ? (
          <TouchableOpacity style={styles.btn} onPress={handleSetTimer}>
            <View>
              <Image source={startImg} style={styles.img} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={handleSetTimer}>
            <View>
              <Image source={stopImg} style={styles.img} />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text>{JSON.stringify(location)}</Text>
      </View>
    </View>
  );
};

export default Timer;
