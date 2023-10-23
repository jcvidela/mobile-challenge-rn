import * as React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JWT from "expo-jwt";
import AuthService from "../../services/AuthService";
import { setIsLoggedIn } from "../../../features/auth/AuthSlice";
import { setUserData } from "../../../features/user/UserSlice";
import { setAvailableNavigation } from "../../../features/navigation/NavigationSlice";
import { setAvailableServices } from "../../../features/services/ServicesSlice";
import { setAddMovements } from "../../../features/movements/MovementsSlice";

const key = "nubikey";

const AuthScreen = () => {
  const dispatch = useDispatch();

  async function onSubmit() {
    try {
      const token = await AuthService.authenticateUser();
      let userData = JWT.decode(token.JWT, key);
      await AsyncStorage.setItem("token", token.JWT);

      // corregimos el bug de la devolución del amount de la API
      const cleanedMovements = userData.movements.map((movement) => ({
        ...movement,
        amount: movement["amount "].trim(),
      }));

      dispatch(setIsLoggedIn(true));
      dispatch(setUserData(userData as any));
      dispatch(setAvailableServices(userData.services as any));
      dispatch(setAvailableNavigation(userData.navigation as any));
      dispatch(setAddMovements(cleanedMovements));
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        autoCorrect={false}
        style={styles.input}
      />
      <TextInput secureTextEntry placeholder="Password" style={styles.input} />

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={[styles.sendButton, { opacity: 0.6 }]}
          onPress={onSubmit}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    alignSelf: "stretch",
    margin: 6,
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
  },
  containerButton: {
    alignSelf: "stretch",
  },
  btnText: {
    fontSize: 20,
  },
  sendButton: {
    height: 48,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  agreeTerms: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AuthScreen;
