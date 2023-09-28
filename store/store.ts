import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../features/auth/AuthSlice';
import NavigationSlice from '../features/navigation/NavigationSlice';
import ServicesSlice from '../features/services/ServicesSlice';

export interface AuthStore {
    isLoggedIn: boolean;
}

export interface UserStore {
    email: string;
    iat: number;
    name: string;
    lastName: string;
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
    movements: Movement[]
}

export interface AppStore {
    auth: AuthStore
}

export const store = configureStore({
  reducer: {
      auth: AuthSlice,
      services: ServicesSlice,
      navigation: NavigationSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch