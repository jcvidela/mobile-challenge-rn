import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/auth/AuthSlice";
import MovementsSlice from "../features/movements/MovementsSlice";
import NavigationSlice from "../features/navigation/NavigationSlice";
import ServicesSlice from "../features/services/ServicesSlice";
import UserSlice from "../features/user/UserSlice";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthStore {
  isLoggedIn: boolean;
}

export interface UserStore {
  email: string;
  iat: number;
  name: string;
  lastName: string;
  balance: number;
  showBalance: boolean;
}

export interface Movement {
  amount: string;
  date: string;
  title: string;
}

export interface ServicesStore {
  availableServices: string[];
}

export interface NavigationStore {
  navigationTabOptions: string[];
}

export interface MovementsStore {
  movements: Movement[];
}

export interface AppStore {
  auth: AuthStore;
  user: UserStore;
  services: ServicesStore;
  navigation: NavigationStore;
  movements: MovementsStore;
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: AuthSlice,
  services: ServicesSlice,
  navigation: NavigationSlice,
  user: UserSlice,
  movements: MovementsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//       auth: AuthSlice,
//       services: ServicesSlice,
//       navigation: NavigationSlice,
//       user: UserSlice,
//       movements: MovementsSlice,
//   },
// })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
