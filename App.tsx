import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store, AppStore } from './store/store'
import { useSelector, Provider } from 'react-redux'

import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { AuthScreen, AuthLoadingScreen, HomeScreen } from './src/screens';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#423df6',
    secondary: '#00d6e4',
    white: '#000000'
  },
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
    </Provider>
  )
}


const App = () => {
  const Stack = createStackNavigator();
  const { isLoggedIn } = useSelector((state: AppStore) => state.auth);

  const OnboardingNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    )
  }

  const AppNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? <AppNavigator /> : <OnboardingNavigator />}
      </NavigationContainer>
    </Provider>
  )

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="AuthLoading">
  //       {/* <Stack.Screen name="LoadingAuthScreen" component={LoadingAuthScreen}/> */}
  //       {isSignedIn ? (
  //         <>
  //           {/* App Navigator */}
  //           <Stack.Screen name="Home" component={HomeScreen} />
  //           <Stack.Screen name="Movements" component={ActivityScreen} />
  //         </>
  //       ) : (
  //         <>
  //           {/* Onboarding Navigator */}
  //           <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
  //           <Stack.Screen name="Auth" component={AuthScreen} />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

export default AppWrapper;