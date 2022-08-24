import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Players } from 'types';

export interface GamePlayState {
	turnOfPlayer: Players;
	showAllCards: boolean;
}

const initialState: GamePlayState = {
	turnOfPlayer: Players.NORTH,
	showAllCards: false,
};

export const gameplaySlice = createSlice({
	name: 'gameplay',
	initialState,
	reducers: {
		nextTurn: (state, action: PayloadAction<Players>) => {
			state.turnOfPlayer = action.payload;
		},
		toggleCardsVisibility: (state) => {
			state.showAllCards = !state.showAllCards;
		},
	},
});

export const { nextTurn, toggleCardsVisibility } = gameplaySlice.actions;
export default gameplaySlice.reducer;
