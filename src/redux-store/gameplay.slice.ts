import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Players, PlayerCardsAndScore, SetPlayerCardsOrScore } from 'types';

interface GamePlayState {
	turnOfPlayer: Players;
	scores: Array<number>;
	cardsAndScore: {
		[Players.NORTH]: PlayerCardsAndScore;
		[Players.EAST]: PlayerCardsAndScore;
		[Players.SOUTH]: PlayerCardsAndScore;
		[Players.WEST]: PlayerCardsAndScore;
	};
}

const initialCardsAndScore: PlayerCardsAndScore = {
	cards: [],
	score: 0,
};

const initialState: GamePlayState = {
	turnOfPlayer: Players.NORTH,
	scores: [0, 0, 0, 0],
	cardsAndScore: {
		[Players.NORTH]: initialCardsAndScore,
		[Players.EAST]: initialCardsAndScore,
		[Players.SOUTH]: initialCardsAndScore,
		[Players.WEST]: initialCardsAndScore,
	},
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
		setPlayerCardsOrScore: (
			state,
			action: PayloadAction<SetPlayerCardsOrScore>
		) => {
			const playerName = action.payload.player;
			const cards = action.payload.cards;
			const score = action.payload.score;

			state.cardsAndScore = {
				...state.cardsAndScore,
				[playerName]: {
					...[playerName],
					// @ts-ignore
					...(cards & { cards: cards }),
					// @ts-ignore
					...(score & { score: score }),
				},
			};
		},
	},
});

export const { nextTurn, setScores, setPlayerCardsOrScore } =
	gameplaySlice.actions;
export default gameplaySlice.reducer;
