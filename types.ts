import { NavigatorScreenParams } from '@react-navigation/native';

export enum Routes {
  MyDayScreen = 'MyDayScreen',
  MyDayInfoScreen = 'MyDayInfoScreen',
  MyCasesScreen = 'MyCasesScreen',
  MyCasesModal = 'MyCasesModal',
  MyApptsScreen = 'MyApptsScreen',
  BsmScreen = 'BsmScreen',
  SplashScreen = 'SplashScreen',
  AuthScreen = 'AuthScreen',
  SettingsScreen = 'SettingsScreen',
  RootNav = 'RootNav',
  TabsNav = 'TabsNav',
  MainNav = 'MainNav',
  MyDayNav = 'MyDayStackNav',
  MyCasesNav = 'MyCasesStackNav',
  ModalNav = 'ModalStackScreen',
}

export type MyCasesStackParamList = {
  [Routes.MyCasesScreen]: undefined;
  [Routes.MyCasesModal]: { step: string; desc: string };
};

export type RootNavParamList = {
  [Routes.MainNav]: NavigatorScreenParams<MainNavStackParamList>;
  [Routes.MyCasesNav]: NavigatorScreenParams<MyCasesStackParamList>;
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
  [Routes.MyDayNav]: undefined;
  [Routes.MyCasesNav]: undefined;
  [Routes.MyApptsScreen]: undefined;
  [Routes.BsmScreen]: undefined;
};

export type MyDayStackParamList = {
  [Routes.MyDayScreen]: undefined;
  [Routes.MyDayInfoScreen]: undefined;
};
