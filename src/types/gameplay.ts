import { CardInfo } from './cards';

export enum Players {
	NORTH = 'North',
	EAST = 'East',
	SOUTH = 'South',
	WEST = 'West',
}

export interface PlayerCardsAndScore {
	cards: CardInfo[];
	score: number;
}

export interface SetPlayerCardsOrScore {
	player: Players;
	cards?: CardInfo[];
	score?: number;
}
