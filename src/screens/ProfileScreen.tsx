import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../../features/auth/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppStore } from '../../store/store';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const { name } = useSelector((state: AppStore) => state.user);

  async function onLogOutPress () {
    await AsyncStorage.removeItem('token');
    dispatch(setIsLoggedIn(false));
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ¡Hola {name}er!
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../wpp-nophoto.png')}
          style={styles.profileImage}
        />
      </View>

      <Button onPress={onLogOutPress}>
            Cerrar sesión
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
    backgroundColor: '#f4f4f4'
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 60,
    overflow: 'hidden', // Asegura que la imagen se ajuste al redondel
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25
  }
});

export default ProfileScreen;
