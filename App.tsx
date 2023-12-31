import ErrorBoundary from "react-native-error-boundary";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { store, persistor, AppStore } from "./store/store";
import { useSelector, Provider } from "react-redux";

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { AuthScreen, AuthLoadingScreen, HomeScreen } from "./src/screens";
import { PersistGate } from "redux-persist/integration/react";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#423df6",
    secondary: "#00d6e4",
    white: "#000000",
  },
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
};

const App = () => {
  const Stack = createStackNavigator();
  const { isLoggedIn } = useSelector((state: AppStore) => state.auth);

  const OnboardingNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    );
  };

  const AppNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            {isLoggedIn ? <AppNavigator /> : <OnboardingNavigator />}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default AppWrapper;
