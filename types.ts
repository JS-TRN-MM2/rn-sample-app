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
  MainNav = 'MainNav',
  TimeLocNav = 'TimeLocStackNav',
  MyClosetNav = 'MyClosetStackNav',
  ModalNav = 'ModalStackScreen',
}

export type MyClosetStackParamList = {
  [Routes.MyClosetScreen]: undefined;
  [Routes.MyClosetModal]: { step: string; desc: string };
};

export type RootNavParamList = {
  [Routes.MainNav]: NavigatorScreenParams<MainNavStackParamList>;
  [Routes.MyClosetNav]: NavigatorScreenParams<MyClosetStackParamList>;
};

export type FirstNavStackParamList = {
  [Routes.SplashScreen]: undefined;
  [Routes.MainNav]: undefined;
};

export type MainNavStackParamList = {
  [Routes.TabsNav]: undefined;
  [Routes.SettingsScreen]: undefined;
};

export type TabsNavStackParamList = {
  [Routes.TimeLocNav]: undefined;
  [Routes.MyClosetNav]: undefined;
  [Routes.ShareClosetScreen]: undefined;
  [Routes.DonationsScreen]: undefined;
};

export type TimeLocStackParamList = {
  [Routes.TimeLocScreen]: undefined;
  [Routes.TimeLocInfoScreen]: undefined;
};
