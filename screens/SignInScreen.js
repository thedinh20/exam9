import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (email && password) {
      const userData = { email, password };
      login(userData);
    } else {
      console.log('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInBox} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialBoxContainer}>
        <IconButton title="Google" onPress={() => console.log("Sign in with Google")} iconName="google" color="#DB4437" />
        <IconButton title="Facebook" onPress={() => console.log("Sign in with Facebook")} iconName="facebook" color="#4267B2" />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpPrefix}>Not yet a member?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Sign Up</Text>
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
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotText: {
    color: '#FFA500',
  },
  signInBox: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  signInText: {
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
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpPrefix: {
    color: 'gray',
  },
  signUpLink: {
    color: '#FFA500',
    marginLeft: 4,
  },
});

export default SignInScreen;