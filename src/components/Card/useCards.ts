import { useAppSelector, shuffledCardsSelector } from 'redux-store';
import { mapCardIndexToSuit, mapCardIndexToValue } from './card-mapping';
import { PlayingCardProps } from 'types';

export const useCards = () => {
	const cards = useAppSelector(shuffledCardsSelector);
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
	console.log(cardsArr);
	return cardsArr;
};
