import { createSlice } from '@reduxjs/toolkit';

export interface AppInitialState {
	helpDialogOpen: boolean;
}

const initialState: AppInitialState = {
	helpDialogOpen: true,
};

export const appSetupSlice = createSlice({
	name: 'appSetup',
	initialState,
	reducers: {
		toggle: (state) => {
			state.helpDialogOpen = !state.helpDialogOpen;
		},
	},
});

export const { toggle } = appSetupSlice.actions;
export default appSetupSlice.reducer;
