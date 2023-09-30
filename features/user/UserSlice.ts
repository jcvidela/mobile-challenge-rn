import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserStore } from '../../store/store';

const initialState: UserStore = {
  email: '',
  iat: 0,
  name: '',
  lastName: '',
  balance: 0,
  showBalance: true
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setShowBalance: (state, action: PayloadAction<boolean>) => {
      state.showBalance = action.payload;
    },
      setUserData: (state, action: PayloadAction<UserStore>) => {
        state.email = action.payload.email;
        state.iat = action.payload.iat;
        state.name = action.payload.name;
        state.lastName = action.payload.lastName;
      }
    },
});

// Action creators are generated for each case reducer function
export const { setUserData, setBalance, setShowBalance } = UserSlice.actions

export default UserSlice.reducer