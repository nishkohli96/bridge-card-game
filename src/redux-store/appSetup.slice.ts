import { createSlice } from '@reduxjs/toolkit';

interface AppState {
	helpDialogOpen: boolean;
	shuffledCards: Array<number>;
	showAllCards: boolean;
}

const initialState: AppState = {
	helpDialogOpen: true,
	shuffledCards: [],
	showAllCards: false,
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
		toggleCardsVisibility: (state) => {
			state.showAllCards = !state.showAllCards;
		},
	},
});

export const { shuffleCards, toggle, toggleCardsVisibility } =
	appSetupSlice.actions;
export default appSetupSlice.reducer;
