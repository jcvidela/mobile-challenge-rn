import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserStore } from '../../store/store';

const initialState: UserStore = {
  email: '',
  iat: 0,
  name: '',
  lastName: '',
}

export const ServicesSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setUserData: (state, action: PayloadAction<UserStore>) => {
        state.email = action.payload.email;
        state.iat = action.payload.iat;
        state.name = action.payload.name;
        state.lastName = action.payload.lastName;
      }
    }
});

// Action creators are generated for each case reducer function
export const { setUserData } = ServicesSlice.actions

export default ServicesSlice.reducer