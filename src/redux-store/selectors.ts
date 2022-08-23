import { RootState } from 'redux-store';

export const helpDialogOpenSelector = (state: RootState) =>
	state.appSetup.helpDialogOpen;

export const shuffledCardsSelector = (state: RootState) =>
	state.appSetup.shuffledCards;
