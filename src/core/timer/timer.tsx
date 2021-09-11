/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { TimerActions } from '../../redux/actions/timerActions';
import { CountActions } from '../../redux/actions/countActions';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './timer.styles';

interface Props {
  title: string;
}

const Timer: React.FC<Props> = ({ title }) => {
  const { timerIsOn } = useSelector((state: AppState) => state.timer);
  const { count } = useSelector((state: AppState) => state.count);
  const timerDispatch = useDispatch<Dispatch<TimerActions>>();
  const countDispatch = useDispatch<Dispatch<CountActions>>();

  const handleIncrement = () => {
    countDispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    countDispatch({ type: 'DECREMENT' });
  };
  const handleSetTimer = () => {
    timerDispatch({ type: 'SET_TIMER' });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.timeContainer}>
        <Text>{title}</Text>
        <View>
          <TouchableOpacity onPress={handleIncrement}>
            <Text style={styles.genericText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.genericText}>{count}</Text>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.genericText}>-</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleSetTimer}>
            <Text style={styles.genericText}>Start Timer</Text>
          </TouchableOpacity>
          <Text style={styles.genericText}>{timerIsOn.toString()}</Text>
        </View>
        <View>
          {!timerIsOn ? (
            <TouchableOpacity style={styles.btn} onPress={handleSetTimer}>
              <View>
                <Image source={require('@assets/startbutton.png')} style={styles.img} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={handleSetTimer}>
              <View>
                <Image source={require('@assets/stopbutton.png')} style={styles.img} />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Timer;
