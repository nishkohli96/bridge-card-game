import {
	mapCardIndexToSuit,
	mapCardIndexToValue,
	getScoreFromCardValue,
} from './card-mapping';
import { PlayingCardProps } from 'types';

export function generateCardsArray(cards: number[]): PlayingCardProps[] {
	const cardsArr: PlayingCardProps[] = [];
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
			isVisible: true,
		});
		return cardsArr;
	});
	return cardsArr;
}

export function calculatePlayerScore(cardsArr: PlayingCardProps[]): number {
	let totalScore = 0;
	cardsArr.map((card) => {
		const valueIndex = card.index % 13;
		// @ts-ignore
		totalScore += getScoreFromCardValue(valueIndex);
		return totalScore;
	});
	return totalScore;
}
