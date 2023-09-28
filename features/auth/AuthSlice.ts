import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthStore } from '../../store/store';

const initialState: AuthStore = {
  isLoggedIn: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoggedIn } = AuthSlice.actions

export default AuthSlice.reducer