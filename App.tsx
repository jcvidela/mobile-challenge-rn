import JWT from 'expo-jwt';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardScreen, SignInScreen, ActivityScreen, LoginScreen, HomeScreen } from './src/screens';

import AuthService from './src/services/AuthService';

const key = 'nubikey';


export default function App() {
  const Stack = createNativeStackNavigator();

  // const isLoading = true;
  const isSignedIn = false;

  async function authenticate() {
    try {
      const token = await AuthService.authenticateUser();
      const decodedToken = JWT.decode(token.JWT, key)
      sessionStorage.setItem('jwt', token.JWT);
      sessionStorage.setItem('userData', JSON.stringify(decodedToken));

    } catch (error) {
      console.error('Authentication Error:', error.message);
    }
  };

  // if (isLoading) {
  //   // We haven't finished checking for the token yet
  //   return <Text>Loading...</Text>;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="LoadingAuthScreen" component={LoadingAuthScreen}/> */}
        {isSignedIn ? (
          <>
            {/* App Navigator */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Movements" component={ActivityScreen} />
          </>
        ) : (
          <>
            {/* Onboarding Navigator */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}