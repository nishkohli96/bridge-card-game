import { useAppSelector, shuffledCardsSelector } from 'redux-store';
import { mapCardIndexToSuit, mapCardIndexToValue } from './card-mapping';

export const useCards = () => {
	const cards = useAppSelector(shuffledCardsSelector);
	const cardsArr = [];
	cards.map((card) => {
		const suitIndex = Number.parseInt(card / 13);
		const valueIndex = card % 13;

		const cardSuit = mapCardIndexToSuit(suitIndex);
		const cardValue = mapCardIndexToValue(valueIndex);
		cardsArr.push({
			suit: cardSuit,
			value: cardValue,
			isVisible: true,
		});
		return cardsArr;
	});
	return cardsArr;
};
