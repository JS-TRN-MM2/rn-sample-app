import React from 'react';
import { View, SafeAreaView, Button, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'femaleAvatar.png',
            }}
            size={60}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title}>John Doe</Title>
            <Caption style={[styles.caption, { marginBottom: 15 }]}>@j_doe</Caption>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="map-marker-radius" color="#777777" size={20} />
            <Text style={{ color: '#777777', marginLeft: 20 }}>Kolkata, India</Text>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="phone" color="#777777" size={20} />
            <Text style={{ color: '#777777', marginLeft: 20 }}>301-656-0987</Text>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="email" color="#777777" size={20} />
            <Text style={{ color: '#777777', marginLeft: 20 }}>john_doe@email.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, { borderRightColor: '#dddddd', borderRightWidth: 1 }]}>
          <Title>$140</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell your friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="account-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="settings-helper" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 80,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;
