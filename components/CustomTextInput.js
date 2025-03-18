import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, autoCapitalize }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
});

export default CustomTextInput;