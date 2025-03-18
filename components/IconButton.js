import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({ title, onPress, iconName, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Icon name={iconName} size={20} color="#FFF" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFF',
    marginLeft: 8,
  },
});

export default IconButton;