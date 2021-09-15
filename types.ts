import { NavigatorScreenParams } from '@react-navigation/native';

export enum Routes {
  TimeLocScreen = 'TimeLocScreen',
  TimeLocInfoScreen = 'TimeLocInfoScreen',
  MyClosetScreen = 'MyClosetScreen',
  MyClosetModal = 'MyClosetModal',
  ShareClosetScreen = 'ShareClosetScreen',
  DonationsScreen = 'DonationsScreen',
  SplashScreen = 'SplashScreen',
  AuthScreen = 'AuthScreen',
  SettingsScreen = 'SettingsScreen',
  RootNav = 'RootNav',
  TabsNav = 'TabsNav',
  MainNavIos = 'MainNavIos',
  MoreStackNav = 'MoreStackNav',
  MyClosetStackNav = 'MyClosetStackNav',
  ModalNav = 'ModalStackScreen',
  More = 'More',
  AddItem = 'AddItem',
  Donation = 'Donation',
  Share = 'Share',
  MyCloset = 'MyCloset',
}

export type MyClosetStackParamList = {
  [Routes.MyClosetScreen]: undefined;
  [Routes.MyClosetModal]: { step: string; desc: string };
};

export type RootNavParamList = {
  [Routes.MainNavIos]: NavigatorScreenParams<MainNavIosStackParamList>;
  [Routes.MyClosetStackNav]: NavigatorScreenParams<MyClosetStackParamList>;
};

export type FirstNavStackParamList = {
  [Routes.SplashScreen]: undefined;
  [Routes.MainNavIos]: undefined;
};

export type MainNavIosStackParamList = {
  [Routes.TabsNav]: undefined;
  [Routes.SettingsScreen]: undefined;
};

export type MainNavAndroidStackParamList = {
  [Routes.MyClosetStackNav]: undefined;
  [Routes.MoreStackNav]: undefined;
  [Routes.Share]: undefined;
  [Routes.Donation]: undefined;
  [Routes.AddItem]: undefined;
};

export type TabsNavStackParamList = {
  [Routes.MyClosetStackNav]: undefined;
  [Routes.MoreStackNav]: undefined;
  [Routes.Share]: undefined;
  [Routes.Donation]: undefined;
  [Routes.AddItem]: undefined;
};

export type MoreStackParamList = {
  [Routes.More]: undefined;
  [Routes.TimeLocScreen]: undefined;
  [Routes.TimeLocInfoScreen]: undefined;
};
