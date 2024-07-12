// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import { getProducts } from '../apiService';

const gridIcon = require('../assets/Listview.png');
const filterIcon = require('../assets/Filter.png');
const addCircleImage = require('../assets/add_circle.png');

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  async function addToCart(product) {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.ourStoryTitle}>Our Story</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image source={gridIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={filterIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })} style={styles.productContainer}>
            <View style={styles.product}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
                <Image source={addCircleImage} style={styles.addButtonImage} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  ourStoryTitle: {
    fontSize: 24,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productContainer: {
    width: width / 2 - 24, // Ensure two items per row with margin
    marginBottom: 16,
  },
  product: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    padding: 8,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  details: {
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 20,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    color: '#E98D02',
    marginVertical: 8,
  },
  addButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonImage: {
    width: 30,
    height: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;