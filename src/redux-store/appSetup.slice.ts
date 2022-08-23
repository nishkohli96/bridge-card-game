import { createSlice } from '@reduxjs/toolkit';

export interface AppInitialState {
	helpDialogOpen: boolean;
	shuffledCards: Array<number>;
}

const initialState: AppInitialState = {
	helpDialogOpen: true,
	shuffledCards: [],
};

export const appSetupSlice = createSlice({
	name: 'appSetup',
	initialState,
	reducers: {
		toggle: (state) => {
			state.helpDialogOpen = !state.helpDialogOpen;
		},
		shuffleCards: (state) => {
			/**
			 * Generate an array from 1 to 52.
			 * Now rearrange them in random order.
			 */
			const sequence = Array.from(Array(52), (_, index) => index + 1);
			const shuffledArray = sequence.sort((a, b) => 0.5 - Math.random());
			state.shuffledCards = shuffledArray;
		},
	},
});

export const { toggle, shuffleCards } = appSetupSlice.actions;
export default appSetupSlice.reducer;
