import * as React from 'react';
import { Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
import JWT from 'expo-jwt';
import AuthService from '../../services/AuthService';
import { setIsLoggedIn } from '../../../features/auth/AuthSlice';
import { setUserData } from '../../../features/user/UserSlice';
import { setAvailableNavigation } from '../../../features/navigation/NavigationSlice';
import { setAvailableServices } from '../../../features/services/ServicesSlice';


const key = 'nubikey';

const AuthScreen = () => {
    const dispatch = useDispatch();

  async function onSubmit() {
    // await AsyncStorage.removeItem('token');
    try {
      const token = await AuthService.authenticateUser();
      const userData = JWT.decode(token.JWT, key);
      await AsyncStorage.setItem('token', token.JWT);

      dispatch(setIsLoggedIn(true));
      dispatch(setUserData(userData as any));
      dispatch(setAvailableServices(userData.services as any));
      dispatch(setAvailableNavigation(userData.navigation as any));

    } catch (error) {
      console.error('Authentication Error:', error.message);
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.input}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={[styles.sendButton, {opacity: 0.6}]}
            onPress={onSubmit}>
            <Text style={{fontSize: 20}}>Login</Text>
          </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    alignSelf: 'stretch',
    margin: 6,
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
  },
  containerButton: {
    alignSelf: 'stretch',
  },
  sendButton: {
    height: 48,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  agreeTerms: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AuthScreen;