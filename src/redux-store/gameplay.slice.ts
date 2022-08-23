import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Players } from 'types';

export interface GamePlayState {
	turnOfPlayer: Players;
}

const initialState: GamePlayState = {
	turnOfPlayer: Players.NORTH,
};

export const gameplaySlice = createSlice({
	name: 'gameplay',
	initialState,
	reducers: {
		nextTurn: (state, action: PayloadAction<Players>) => {
			state.turnOfPlayer = action.payload;
		},
	},
});

export const { nextTurn } = gameplaySlice.actions;
export default gameplaySlice.reducer;
