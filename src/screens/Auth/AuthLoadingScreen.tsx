import * as React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIsLoggedIn } from '../../../features/auth/AuthSlice';
import { useDispatch } from 'react-redux';

const AuthLoadingScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    let isMounted = React.useRef(true);

    React.useEffect(async () => {
        if (isMounted.current) {
            await AsyncStorage.removeItem('token')
            AsyncStorage.getItem('token').then((x) => {
                if (x) {
                    console.log(x);
                    dispatch(setIsLoggedIn(true));
                } else {
                    navigation.navigate('Auth');
                }
            });
        }
        
        return () => isMounted.current = false;
    }, []);
    
    return <Text>Loading...</Text>
};

export default AuthLoadingScreen;