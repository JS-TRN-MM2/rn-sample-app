import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: colors.primaryGray,
  },
  timerContainer: {
    alignItems: 'center',
  },
  time: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: colors.primaryDark,
  },
  imageContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 2
  },
  image: {
    //borderWidth: 2
  },
  tempTime: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: colors.primaryDark,
    borderWidth: 2,
    padding: 10,
  },
  infoButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: 10,
  },
  infoButtonText: {
    fontSize: 36,
    color: colors.primaryOrange,
  },
  genericText: {
    color: 'red',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'orange',
    padding: 10,
  },
});

export default styles;
