/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TimerActions } from '../actions/timerActions';

type TimerState = {
  timerIsOn: boolean;
};
const initialState: TimerState = {
  timerIsOn: false,
};
const timerReducer = (state: TimerState = initialState, action: TimerActions) => {
  switch (action.type) {
    case 'SET_TIMER':
      return {
        ...state,
        timerIsOn: !state.timerIsOn,
      };
    default:
      return state;
  }
};
export default timerReducer;
