import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movement, MovementsStore } from '../../store/store';

const initialState: MovementsStore = {
    movements: [],
  } as MovementsStore;

export const Movements = createSlice({
  name: 'movements',
  initialState,
  reducers: {
      setAddMovements: (state, action) => {
        state.movements = action.payload;
      },
      setAddMovement: (state, action: PayloadAction<Movement>) => {
        state.movements.push(action.payload);
      }
    }
});

// Action creators are generated for each case reducer function
export const { setAddMovements, setAddMovement } = Movements.actions

export default Movements.reducer