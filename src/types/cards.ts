export type suitIndex = 0 | 1 | 2 | 3;
export type valueIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export enum CardValues {
	CARD_A = 'A',
	CARD_K = 'K',
	CARD_Q = 'Q',
	CARD_J = 'J',
	CARD_10 = '10',
	CARD_9 = '9',
	CARD_8 = '8',
	CARD_7 = '7',
	CARD_6 = '6',
	CARD_5 = '5',
	CARD_4 = '4',
	CARD_3 = '3',
	CARD_2 = '2',
}

export enum CardSuits {
	SPADES = 'Spades',
	HEARTS = 'Hearts',
	DIAMONDS = 'Diamonds',
	CLUBS = 'Clubs',
}

/** index is the value corresponding to shuffledCards in redux-store */
export interface CardInfo {
	faceValue: CardValues;
	suit: CardSuits;
	index: number;
}
