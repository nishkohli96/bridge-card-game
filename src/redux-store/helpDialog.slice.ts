import { createSlice } from '@reduxjs/toolkit';

export interface GameGuideState {
	helpDialogOpen: boolean;
}

const initialState: GameGuideState = {
	helpDialogOpen: true,
};

export const helpDialogSlice = createSlice({
	name: 'helpDialog',
	initialState,
	reducers: {
		toggle: (state) => {
			state.helpDialogOpen = !state.helpDialogOpen;
		},
	},
});

export const { toggle } = helpDialogSlice.actions;
export default helpDialogSlice.reducer;
