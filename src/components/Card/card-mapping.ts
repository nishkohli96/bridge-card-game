import { CardSuits, CardValues } from '.';

/**
 * When starting a new game, assume cards are sorted
 * by suit (Spade, Heart, Diamond, Club),
 * and then by number, (A, K, Q, J, 10, 9...).
 */

/**
 * parseInt(cardIndex/13) yields the card-suit
 */
export function mapCardIndexToSuit(cardIndex: 0 | 1 | 2 | 3) {
	switch (cardIndex) {
		case 0:
			return CardSuits.SPADES;
		case 1:
			return CardSuits.HEARTS;
		case 2:
			return CardSuits.DIAMONDS;
		case 3:
			return CardSuits.CLUBS;
		default:
			return CardSuits.SPADES;
	}
}

/**
 * (cardIndex % 13) yields the card-value
 */
export function mapCardIndexToValue(
	cardIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
) {
	switch (cardIndex) {
		case 0:
			return CardValues.CARD_A;
		case 1:
			return CardValues.CARD_K;
		case 2:
			return CardValues.CARD_Q;
		case 3:
			return CardValues.CARD_J;
		case 4:
			return CardValues.CARD_10;
		case 5:
			return CardValues.CARD_9;
		case 6:
			return CardValues.CARD_8;
		case 7:
			return CardValues.CARD_7;
		case 8:
			return CardValues.CARD_6;
		case 9:
			return CardValues.CARD_5;
		case 10:
			return CardValues.CARD_4;
		case 11:
			return CardValues.CARD_3;
		case 12:
			return CardValues.CARD_2;
		default:
			return CardValues.CARD_A;
	}
}
