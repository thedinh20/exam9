import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  const topCategories = [
    { id: '1', name: 'Pizza', image: require('../assets/pizza.jpg') },
    { id: '2', name: 'Burgers', image: require('../assets/burger.jpg') },
    { id: '3', name: 'Steak', image: require('../assets/steak.jpg') },
  ];

  const popularItems = [
    { id: '1', name: 'Food 1', price: '$1', image: require('../assets/burger.jpg') },
    { id: '2', name: 'Food 2', price: '$2', image: require('../assets/pizza.jpg') },
    { id: '3', name: 'Food 3', price: '$3', image: require('../assets/steak.jpg') },
  ];

  const saleOffItems = [
    { id: '1', name: 'Food 4', price: '$5', image: require('../assets/steak.jpg'), offer: '10% OFF' },
    { id: '2', name: 'Food 5', price: '$4', image: require('../assets/pizza.jpg') },
  ];

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPopularItem = ({ item }) => (
    <TouchableOpacity style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const renderSaleOffItem = ({ item }) => (
    <TouchableOpacity style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
      {item.offer && <Text style={styles.offerText}>{item.offer}</Text>}
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios/50/000000/search--v1.png' }} // Biểu tượng tìm kiếm từ internet
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
          placeholderTextColor="#888"
        />
      </View>

      {/* Top Categories */}
      <View style={styles.section}>
        <Header title="Top Categories" />
        <FlatList
          data={topCategories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Popular Items */}
      <View style={styles.section}>
        <Header title="Popular Items" onPress={() => console.log('View all popular items')} />
        <FlatList
          data={popularItems}
          renderItem={renderPopularItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Sale-off Items */}
      <View style={styles.section}>
        <Header title="Sale-off Items" onPress={() => console.log('View all sale-off items')} />
        <FlatList
          data={saleOffItems}
          renderItem={renderSaleOffItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 2, // Shadow cho Android
    shadowColor: '#000', // Shadow cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  categoryItem: {
    width: 100,
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  itemCard: {
    width: 150,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    elevation: 2, // Shadow cho Android
    shadowColor: '#000', // Shadow cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  offerText: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontSize: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;