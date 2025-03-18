import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onPress }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {onPress && (
        <TouchableOpacity style={styles.headerButton} onPress={onPress}>
          <Text style={styles.headerButtonText}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerButton: {
    backgroundColor: '#FFA500', // Màu vàng cho nút View all
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  headerButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Header;