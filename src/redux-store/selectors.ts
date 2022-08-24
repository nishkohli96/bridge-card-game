import { RootState } from 'redux-store';

export const helpDialogOpenSelector = (state: RootState) =>
	state.appSetup.helpDialogOpen;

export const shuffledCardsSelector = (state: RootState) =>
	state.appSetup.shuffledCards;

export const showAllCardsSelector = (state: RootState) =>
	state.appSetup.showAllCards;

export const turnOfPlayerSelector = (state: RootState) =>
	state.gameplay.turnOfPlayer;
