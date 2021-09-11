import React from 'react';
import { View } from 'react-native';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <View
    style={{
      padding: 25,
    }}
  >
    {children}
  </View>
);

export default Layout;
