import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MovementsStore } from '../../store/store';

const initialState: MovementsStore = {
    movements: [],
  }

export const Movements = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
      setMovementsSlice: (state, action) => {
        state.movements = action.payload;
      }
    }
});

// Action creators are generated for each case reducer function
export const { setMovementsSlice } = Movements.actions

export default Movements.reducer