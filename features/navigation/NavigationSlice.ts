import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NavigationStore } from '../../store/store';

const initialState: NavigationStore = {
    navigationTabOptions: [],
  }

export const NavigationTab = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
      setAvailableNavigation: (state, action) => {
        state.navigationTabOptions = action.payload;
      }
    }
});

// Action creators are generated for each case reducer function
export const { setAvailableNavigation } = NavigationTab.actions

export default NavigationTab.reducer