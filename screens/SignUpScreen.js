import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Sử dụng login để mô phỏng đăng ký thành công

  const handleSignUp = () => {
    if (email && password) { // Kiểm tra dữ liệu đầu vào
      const userData = { email, password }; // Dữ liệu người dùng bao gồm email và password
      login(userData); // Gọi login để chuyển hướng sau khi đăng ký
    } else {
      console.log('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <CustomTextInput
        label="Email ID"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email here!"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password here!"
        secureTextEntry
      />
      <TouchableOpacity style={styles.signUpBox} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign up with</Text>
      <View style={styles.socialBoxContainer}>
        <IconButton
          title="Google"
          onPress={() => console.log("Sign up with Google")}
          iconName="google"
          color="#DB4437"
        />
        <IconButton
          title="Facebook"
          onPress={() => console.log("Sign up with Facebook")}
          iconName="facebook"
          color="#4267B2"
        />
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInPrefix}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signUpBox: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  orText: {
    marginVertical: 12,
    color: 'gray',
  },
  socialBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInPrefix: {
    color: 'gray',
  },
  signInLink: {
    color: '#FFA500',
    marginLeft: 4,
  },
});

export default SignUpScreen;