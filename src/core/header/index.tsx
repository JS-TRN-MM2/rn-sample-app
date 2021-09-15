import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'android' ? 76 : 100,
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    ...Platform.select({
      ios: { backgroundColor: '#f00', paddingTop: 24 },
      android: { backgroundColor: '#00f' },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Header;
