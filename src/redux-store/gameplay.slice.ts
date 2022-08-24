import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Players } from 'types';

interface GamePlayState {
	turnOfPlayer: Players;
	scores: Array<number>;
}

const initialState: GamePlayState = {
	turnOfPlayer: Players.NORTH,
	/* Scores of North, East, West, South respectively */
	scores: [0, 0, 0, 0],
};

export const gameplaySlice = createSlice({
	name: 'gameplay',
	initialState,
	reducers: {
		nextTurn: (state, action: PayloadAction<Players>) => {
			state.turnOfPlayer = action.payload;
		},
		setScores: (state, action: PayloadAction<number[]>) => {
			state.scores = action.payload;
		},
	},
});

export const { nextTurn, setScores } = gameplaySlice.actions;
export default gameplaySlice.reducer;
