import { NavigatorScreenParams } from '@react-navigation/native';

export enum Routes {
  SplashScreen = 'SplashScreen',
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
  ResetPasswordScreen = 'ResetPasswordScreen',
  TimeLocScreen = 'TimeLocScreen',
  TimeLocInfoScreen = 'TimeLocInfoScreen',
  MyClosetScreen = 'MyClosetScreen',
  MyClosetModal = 'MyClosetModal',
  HomeScreen = 'HomeScreen',
  CardListScreen = 'CardListScreen',
  CardItemDetails = 'CardItemDetails',
  ShareScreen = 'ShareScreen',
  DonateScreen = 'DonateScreen',
  AddItemScreen = 'AddItemScreen',

  ProfileScreen = 'ProfileScreen',
  EditProfileScreen = 'EditProfileScreen',
  More = 'More',
  AuthScreen = 'AuthScreen',
  SettingsScreen = 'SettingsScreen',
  EditSettingsScreen = 'EditSettingsScreen',
  NotificationScreen = 'NotificationScreen',
  RootNav = 'RootNav',
  MainTabScreen = 'MainTabScreen',

  MyClosetDrawerStackScreen = 'MyClosetDrawerStackScreen',
  ModalStackScreen = 'ModalStackScreen',

  HomeStackScreen = 'HomeStackScreen',
  AddItemStackScreen = 'AddItemStackScreen',
  DonateStackScreen = 'DonateStackScreen',
  ShareStackScreen = 'ShareStackScreen',
  MoreStackScreen = 'MoreStackScreen',
  ProfileStackScreen = 'ProfileStackScreen',
}

export type MyClosetDrawerStackParamList = {
  [Routes.MyClosetScreen]: undefined;
  [Routes.MyClosetModal]: { step: string; desc: string };
};

export type ShareStackParamList = {
  [Routes.ShareScreen]: undefined;
};

export type AddItemStackParamList = {
  [Routes.AddItemScreen]: undefined;
};

export type DonateStackParamList = {
  [Routes.DonateScreen]: undefined;
};

export type NotificationStackParamList = {
  [Routes.NotificationScreen]: undefined;
};

export type SettingsStackParamList = {
  [Routes.SettingsScreen]: undefined;
  [Routes.EditSettingsScreen]: undefined;
};

export type ProfileStackParamList = {
  [Routes.ProfileScreen]: undefined;
  [Routes.EditProfileScreen]: undefined;
};

export type MoreStackParamList = {
  [Routes.More]: undefined;
  [Routes.TimeLocScreen]: undefined;
  [Routes.TimeLocInfoScreen]: undefined;
};

export type AuthStackParamList = {
  [Routes.SplashScreen]: undefined;
  [Routes.SignInScreen]: undefined;
  [Routes.SignUpScreen]: undefined;
  [Routes.ResetPasswordScreen]: undefined;
};

export type AppDrawerStackParamList = {
  [Routes.MainTabScreen]: undefined;
  [Routes.SettingsScreen]: undefined;
};

export type MainNavAndroidStackParamList = {
  [Routes.MyClosetStackScreen]: undefined;
  [Routes.MoreStackScreen]: undefined;
  [Routes.ShareStackScreen]: undefined;
  [Routes.DonateStackScreen]: undefined;
  [Routes.AddItemStackScreen]: undefined;
};

export type MainTabStackParamList = {
  [Routes.MyClosetStackScreen]: undefined;
  [Routes.MoreStackScreen]: undefined;
  [Routes.ShareStackScreen]: undefined;
  [Routes.DonateStackScreen]: undefined;
  [Routes.AddItemStackScreen]: undefined;
};
