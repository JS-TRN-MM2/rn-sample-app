/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ParamListBase, useTheme } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { logoutUser } from './authSlice';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface SplashScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentAuthUser = useSelector((state: RootState) => state.auth.currentAuthUser);

  console.log('SplashScreen: currentAuthUser is ', currentAuthUser);

  const { colors } = useTheme();
  useEffect(() => {
    //const db = SQLite.openDatabase('rn-sample-app.db');
    dispatch(logoutUser());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration="1500"
          source={require('../../assets/startbutton.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          Stay connected with everyone!
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.getStarted}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
