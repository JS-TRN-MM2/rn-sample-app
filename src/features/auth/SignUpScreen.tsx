/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Feather } from '@expo/vector-icons';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList, Routes } from '../../../types';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { loginUser, setExistingUser, updateEmail, updateUsername, updateId } from './authSlice';
import {
  insertNewUser,
  insertAuthUser,
  findUserByUsername,
  findUserByUsernameAndPassword,
} from './txUsers';

type SignUpScreenProp = {
  navigation: NativeStackNavigationProp<AuthStackParamList, Routes.SignUpScreen>;
};

const SignInScreen: React.VFC<SignUpScreenProp> = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentAuthUser = useSelector((state: RootState) => state.auth.currentAuthUser);
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    newUserComplete: false,
  });

  const handleSignUp = () => {
    dispatch(setExistingUser(false));
    dispatch(updateEmail(data.email));
    dispatch(updateUsername(data.username));
    setData({
      ...data,
      newUserComplete: false,
    });

    //check to see if user exists
    findUserByUsername(data.username)
      .then((result) => {
        console.log('what is result', result.length);
        console.log('what is userid', result);

        // if user exists already, ask if they want to reroute to reset password
        if (result.length !== 0) {
          dispatch(setExistingUser(true));
          dispatch(updateId(result[0].id));
          navigation.navigate(Routes.ResetPasswordScreen);
        } else {
          // if user does not exist, insert the new user and log them in
          insertNewUser(data.email, data.username, data.password)
            .then(() => {
              insertAuthUser(data.email, data.username);
            })
            .then(() => {
              const newUser = {
                email: data.email,
                username: data.username,
                password: data.password,
              };
              dispatch(loginUser(newUser));
              console.log('currentAuthUser is ', currentAuthUser);
              return;
            })
            .catch((error) => {
              console.error('what is the error', error);
            })
            .finally(() =>
              setData({
                ...data,
                newUserComplete: true,
              }),
            );
        }
      })
      .catch((error) => {
        console.error('first catch', error);
      });
  };

  const textInputChangeEmail = (val: string) => {
    setData({
      ...data,
      email: '',
      check_textInputChange: false,
    });
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const textInputChangeUsername = (val: string) => {
    setData({
      ...data,
      username: '',
      check_textInputChange: false,
    });
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val: string) => {
    setData({
      ...data,
      confirm_password: '',
    });
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <Animatable.View animation="fadeInUpBig" style={[styles.header]}>
        <Text style={[styles.text_header]}>Register Now!</Text>
      </Animatable.View>
      <Animatable.View style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val: string) => textInputChangeEmail(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 30,
              },
            ]}
          >
            Username
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val: string) => textInputChangeUsername(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 30,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val: string) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 30,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val: string) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>By signing up you agree to our</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}> Privacy policy</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                handleSignUp();
              }}
            >
              <LinearGradient colors={['#FFA07A', '#FF6347']} style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#FF6347',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#FF6347',
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
