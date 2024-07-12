// components/DrawerContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>ERIC ATSU</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Store"
        onPress={() => props.navigation.navigate('Store')}
      />
      <DrawerItem
        label="Locations"
        onPress={() => props.navigation.navigate('Locations')}
      />
      <DrawerItem
        label="Blog"
        onPress={() => props.navigation.navigate('Blog')}
      />
      <DrawerItem
        label="Jewellery"
        onPress={() => props.navigation.navigate('Jewellery')}
      />
      <DrawerItem
        label="Electronic"
        onPress={() => props.navigation.navigate('Electronic')}
      />
      <DrawerItem
        label="Clothing"
        onPress={() => props.navigation.navigate('Clothing')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DrawerContent;