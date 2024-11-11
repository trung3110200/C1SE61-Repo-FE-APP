import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

const LoginScreen = () => {
  const [fullName, setFullName] = useState('admin');
  const [password, setPassword] = useState('admin');
  
  // Sử dụng useNavigation để lấy navigation
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  // Đổi tên hàm để không bị trùng với tên component
  const handleLogin = () => {
    if (!fullName || !password) {
      Alert.alert('Please fill out all fields');
      return;
    }

    if (fullName === 'admin' && password === 'admin') {
      // Điều hướng đến màn hình "home"
      navigation.navigate('home');
    } else {
      Alert.alert('Invalid credentials, please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>LogIn</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <AntDesign name="user" size={24} color="black" style={styles.icon} />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Feather name="lock" size={24} color="black" style={styles.icon} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Or connect using</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Entypo name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="twitter" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 30,
  },
  inputContainer: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#6a4ee4',
    marginHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#6a4ee4',
    textAlign: 'center',
    marginVertical: 10,
  },
  orText: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialButton: {
    backgroundColor: '#6a4ee4',
    padding: 10,
    borderRadius: 50,
  },
});

export default LoginScreen;
