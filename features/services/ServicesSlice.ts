import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ServicesStore } from '../../store/store';

const initialState: ServicesStore = {
  availableServices: [],
}

export const ServicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
      setAvailableServices: (state, action) => {
        state.availableServices = action.payload;
      }
    }
});

// Action creators are generated for each case reducer function
export const { setAvailableServices } = ServicesSlice.actions

export default ServicesSlice.reducer