/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import { Share, AddItem, Donation } from '../features';
import MyClosetStackNav from './my-closet-nav';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.imgbin.com%2F23%2F2%2F23%2Fimgbin-avatar-female-cartoon-avatar-sSczMz9eQpmfiByUgihnVTaNT.jpg&imgrefurl=https%3A%2F%2Fimgbin.com%2Fpng%2FfgFFVq8m%2Favatar-female-png&tbnid=Z9Osbf7hAeU1uM&vet=12ahUKEwjwk6LP74TzAhWXAFkFHYgMDYUQMygpegUIARCjAg..i&docid=JJte54b51x0qmM&w=728&h=854&q=free%20avatars%20female&ved=2ahUKEwjwk6LP74TzAhWXAFkFHYgMDYUQMygpegUIARCjAg',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Jane Smith</Title>
                <Caption style={styles.caption}>@jsmith</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="shirt-outline" color={color} size={size} />
              )}
              label="My Closet"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="heart-circle-outline" color={color} size={size} />
              )}
              label="Share"
              onPress={() => {
                props.navigation.navigate('Share');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Ionicons name="gift-outline" color={color} size={size} />}
              label="Donate"
              onPress={() => {
                props.navigation.navigate('Donation');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="thumbs-up-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => <Ionicons name="exit-outline" color={color} size={size} />}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
