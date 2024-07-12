// components/CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Text style={styles.closeButton}>×</Text>
      </TouchableOpacity>
      <View style={styles.drawerHeader}>
        <Text style={styles.headerText}>ERIC ATSU</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.menuItem}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.menuItem}>Locations</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.menuItem}>Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.menuItem}>Jewellery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.menuItem}>Electronic</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.menuItem}>Clothing</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  closeButton: {
    fontSize: 24,
    alignSelf: 'flex-end',
  },
  drawerHeader: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default CustomDrawerContent;