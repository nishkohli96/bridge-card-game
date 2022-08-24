import {
	mapCardIndexToSuit,
	mapCardIndexToValue,
	getScoreFromCardValue,
} from './card-mapping';
import { CardInfo } from 'types';

export function generateCardsArray(cards: number[]): CardInfo[] {
	const cardsArr: CardInfo[] = [];
	cards.map((card) => {
		const suitIndex = Math.floor(card / 13);
		const valueIndex = card % 13;
		// @ts-ignore
		const cardSuit = mapCardIndexToSuit(suitIndex);
		// @ts-ignore
		const cardValue = mapCardIndexToValue(valueIndex);

		cardsArr.push({
			suit: cardSuit,
			faceValue: cardValue,
			index: card,
		});
		return cardsArr;
	});
	return cardsArr;
}

export function calculatePlayerScore(cardsArr: CardInfo[]): number {
	let totalScore = 0;
	cardsArr.map((card) => {
		const valueIndex = card.index % 13;
		// @ts-ignore
		totalScore += getScoreFromCardValue(valueIndex);
		return totalScore;
	});
	return totalScore;
}

export function getCardsFromCardsArray(
	cards: CardInfo[],
	start: number,
	end: number
): CardInfo[] {
	const res = [];
	for (let i = start; i < end; i++) {
		res.push(cards[i]);
	}
	return res;
}
