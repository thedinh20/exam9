import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/avatar.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </View>
      <Text style={styles.name}>Hung Nguyen</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now i am learning React Native
      </Text>
      <TouchableOpacity style={styles.signOutButton} onPress={logout}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5', // Màu nền sáng như trong hình
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#666', // Màu xám cho tên
    marginBottom: 5,
  },
  role: {
    paddingTop: 20,
    fontSize: 18,
    color: '#1E90FF', // Màu xanh dương cho vai trò
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666', // Màu xám cho mô tả
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20, // Thêm padding ngang để phù hợp với hình
  },
  signOutButton: {
    backgroundColor: '#FFA500', // Màu vàng cam cho nút Sign Out
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25, // Bo góc để trông giống nút trong hình
    elevation: 2, // Shadow cho Android
    shadowColor: '#000', // Shadow cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  signOutText: {
    color: 'white', // Chữ trắng trong nút
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;