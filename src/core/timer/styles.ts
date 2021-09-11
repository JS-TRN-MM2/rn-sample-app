import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    fontFamily: 'DeliusUnicase_400Regular',
    fontSize: 24,
    color: colors.primaryDark,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    justifyContent: 'center',
  },
  genericText: {
    color: 'red',
    fontSize: 20,
  },
});

export default styles;
