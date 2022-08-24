import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
	helpDialogOpen: boolean;
	shuffledCards: Array<number>;
}

const initialState: AppState = {
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
			 * Generate an array from 0 to 51.
			 * Now rearrange them in random order.
			 */
			const sequence = Array.from(Array(52), (_, index) => index);
			const shuffledArray = sequence.sort(() => 0.5 - Math.random());
			state.shuffledCards = shuffledArray;
		},
	},
});

export const { toggle, shuffleCards } = appSetupSlice.actions;
export default appSetupSlice.reducer;
