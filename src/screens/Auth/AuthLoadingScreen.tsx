import * as React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIsLoggedIn } from '../../../features/auth/AuthSlice';
import { useDispatch } from 'react-redux';

const AuthLoadingScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    React.useEffect(() => {
            AsyncStorage.getItem('token').then((x) => {
                if (x) {
                    dispatch(setIsLoggedIn(true));
                } else {
                    navigation.navigate('Auth');
                }
            });
    }, []);
    
    return <Text>Loading...</Text>
};

export default AuthLoadingScreen;