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
import { loginUser } from './authSlice';
import { insertAuthUser, fetchUsers } from './txUsers';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Feather } from '@expo/vector-icons';

import { useTheme } from 'react-native-paper';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Routes } from '../../../types';
import { Console } from 'console';

type ForgotPasswordScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, Routes.ForgotPasswordScreen>;
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProp> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { colors } = useTheme();

  const [data, setData] = React.useState({
    email: '',
    newPassword: '',
    confirm_newPassword: '',
    isUser: false,
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  useEffect(() => {
    setData({
      ...data,
      email: '',
      newPassword: '',
      confirm_newPassword: '',
      isUser: false,
    });
  }, []);

  const handleResetPassword = () => {
    setData({
      ...data,
      email: '',
      newPassword: '',
      isUser: false,
    });
    fetchUsers()
      .then((result) => {
        const foundUser = result.filter((item: { email: string }) => {
          return data.email == item.email;
        });
        if (foundUser.length == 0 || undefined) {
          console.log(
            'foundUser is an empty array.  There is no user with that email address in the MTBL_USERS. ',
          );
        } else {
          setData({
            ...data,
            isUser: true,
            email: '',
          });
          console.log('email is in the table.  allow user to reset ', foundUser);
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

  const handlePasswordChange = (val1: string) => {
    setData({
      ...data,
      newPassword: val1,
    });
  };

  const handleConfirmPasswordChange = (val2: string) => {
    setData({
      ...data,
      confirm_newPassword: '',
    });
    setData({
      ...data,
      confirm_newPassword: val2,
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
        {!data.isUser ? (
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
                  Check Email
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 40,
                },
              ]}
            >
              We found your account. Enter a new password below.
            </Text>

            <View
              style={[
                styles.action,
                {
                  marginTop: 40,
                },
              ]}
            >
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val1: string) => handlePasswordChange(val1)}
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
                onChangeText={(val2: string) => handleConfirmPasswordChange(val2)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>

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
});
