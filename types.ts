import { NavigatorScreenParams } from '@react-navigation/native';

export enum Routes {
  TimeLocScreen = 'TimeLocScreen',
  TimeLocInfoScreen = 'TimeLocInfoScreen',
  MyClosetScreen = 'MyClosetScreen',
  MyClosetModal = 'MyClosetModal',
  ShareScreen = 'ShareScreen',
  DonateScreen = 'DonateScreen',
  AddItemScreen = 'AddItemScreen',
  SplashScreen = 'SplashScreen',
  AuthScreen = 'AuthScreen',
  SettingsScreen = 'SettingsScreen',
  RootNav = 'RootNav',
  TabsNav = 'TabsNav',
  MainNavIos = 'MainNavIos',

  MyClosetStackNav = 'MyClosetStackNav',
  ModalNav = 'ModalStackScreen',
  More = 'More',
  AddItemNav = 'AddItemNav',
  DonateNav = 'DonateNav',
  ShareNav = 'ShareNav',
  MyClosetNav = 'MyClosetNav',
  MoreNav = 'MoreNav',
}

export type MyClosetStackParamList = {
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

export type MoreStackParamList = {
  [Routes.More]: undefined;
  [Routes.TimeLocScreen]: undefined;
  [Routes.TimeLocInfoScreen]: undefined;
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
  [Routes.MyClosetNav]: undefined;
  [Routes.MoreNav]: undefined;
  [Routes.ShareNav]: undefined;
  [Routes.DonateNav]: undefined;
  [Routes.AddItemNav]: undefined;
};

export type TabsNavStackParamList = {
  [Routes.MyClosetNav]: undefined;
  [Routes.MoreNav]: undefined;
  [Routes.ShareNav]: undefined;
  [Routes.DonateNav]: undefined;
  [Routes.AddItemNav]: undefined;
};
