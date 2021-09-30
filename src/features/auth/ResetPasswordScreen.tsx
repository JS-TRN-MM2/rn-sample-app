/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { loginUser, setExistingUser } from './authSlice';
import { insertAuthUser, findUserByEmail, updateUserPassword } from './txUsers';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Feather } from '@expo/vector-icons';

import { useTheme } from 'react-native-paper';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList, Routes } from '../../../types';

type ForgotPasswordScreenProp = {
  navigation: NativeStackNavigationProp<AuthStackParamList, Routes.ResetPasswordScreen>;
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProp> = ({ navigation }) => {
  const dispatch = useDispatch();
  const existingUser = useSelector((state: RootState) => state.auth.currentAuthUser);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const currentAuthUser = useSelector((state: RootState) => state.auth.currentAuthUser);
  const _id = useSelector((state: RootState) => state.auth._id);
  const _email = useSelector((state: RootState) => state.auth._email);
  const _username = useSelector((state: RootState) => state.auth._username);

  console.log('ResetPasswordScreen: currentAuthUser', currentAuthUser);

  const { colors } = useTheme();

  const [data, setData] = React.useState({
    userId: 0,
    email: '',
    newPassword: '',
    confirm_newPassword: '',
    passwordsMatch: false,
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  useEffect(() => {
    setData({
      ...data,
      newPassword: '',
      confirm_newPassword: '',
    });
  }, []);

  useEffect(() => {
    if (data.newPassword === data.confirm_newPassword) {
      setData({
        ...data,
        passwordsMatch: true,
      });
    }
  }, [data.confirm_newPassword]);

  const handleResetPassword = () => {
    console.log('Reset: what is password', data.newPassword);
    console.log('Reset: user id', data.userId);
    updateUserPassword(data.newPassword, _id)
      .then((result) => {
        console.log('what is result', result);
        console.log('password has been reset.  Do you want to login?');
        insertAuthUser(_email, _username)
          .then(() => {
            const currUser = {
              email: _email,
              username: _username,
            };
            dispatch(loginUser(currUser));
          })
          .catch((error) => {
            console.error('what is the error', error);
          });
      })
      .catch((error) => {
        console.error('password update', error);
      });
  };

  const handleCheckEmail = () => {
    setData({
      ...data,
      newPassword: '',
    });
    findUserByEmail(_email)
      .then((result) => {
        if (result.length == 0) {
          console.log(
            'foundUser is an empty array.  There is no user with that email address in the MTBL_USERS. ',
          );
        } else {
          dispatch(setExistingUser(true));
          setData({
            ...data,
            passwordsMatch: false,
            userId: result[0].id,
          });
          console.log('email is in the table.  allow user to reset ', result[0].id);
        }
      })
      .catch((error) => {
        console.error('first catch', error);
      });
  };

  const textInputChangeEmail = (val: string) => {
    setData({
      ...data,
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

  const textInputChangePassword = (val: string) => {
    setData({
      ...data,
      newPassword: val,
    });
  };

  const textInputChangeConfirmPassword = (val: string) => {
    setData({
      ...data,
      confirm_newPassword: val,
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
      <View style={styles.header}>
        <Text style={styles.text_header}>Reset Password</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        {!existingUser ? (
          <View>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 40,
                },
              ]}
            >
              Enter your email and we can check to see if you are in the system.
            </Text>

            <View
              style={[
                styles.action,
                {
                  marginTop: 40,
                },
              ]}
            >
              <FontAwesome name="envelope-o" color="#05375a" size={20} />
              <TextInput
                value={data.email}
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val: string) => textInputChangeEmail(val)}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  marginTop: 40,
                },
              ]}
              onPress={() => {
                handleCheckEmail();
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
                  Check Email
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {!isAuth && (
              <Text>
                Your email already exists in the system. Change your password and you will be logged
                in
              </Text>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 30,
                },
              ]}
            >
              Enter New Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                value={data.newPassword}
                placeholder="New Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val: string) => textInputChangePassword(val)}
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
                onChangeText={(val: string) => textInputChangeConfirmPassword(val)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {!data.passwordsMatch ? (
              <View>
                <Text style={styles.inlineError}>Passwords don&apos;t match.</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.inlineSuccess}>Passwords match!</Text>
              </View>
            )}

            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  marginTop: 40,
                },
              ]}
              onPress={() => {
                handleResetPassword();
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
                  Change Password
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </Animatable.View>
    </View>
  );
};

export default ForgotPasswordScreen;

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
    flex: 3,
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
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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
  inlineError: {
    fontSize: 16,
    color: 'red',
  },
  inlineSuccess: {
    fontSize: 16,
    color: 'green',
  },
});
