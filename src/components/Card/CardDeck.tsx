import { FC } from 'react';
import { PlayingCard, PlayingCardProps } from './PlayingCard';
import { CardValues, CardSuits } from './CardTypes';
export interface CardDeckProps {
	posRight?: boolean;
	// cards: PlayingCardProps[];
	// numCards: number;
}

const cards = [
	{ faceValue: CardValues.CARD_5, suit: CardSuits.SPADES },
	{ faceValue: CardValues.CARD_2, suit: CardSuits.DIAMONDS },
	{ faceValue: CardValues.CARD_4, suit: CardSuits.HEARTS },
	{ faceValue: CardValues.CARD_8, suit: CardSuits.HEARTS },
	{ faceValue: CardValues.CARD_8, suit: CardSuits.SPADES },
	{ faceValue: CardValues.CARD_10, suit: CardSuits.SPADES },
	{ faceValue: CardValues.CARD_5, suit: CardSuits.SPADES },
	{ faceValue: CardValues.CARD_2, suit: CardSuits.DIAMONDS },
	{ faceValue: CardValues.CARD_4, suit: CardSuits.HEARTS },
	{ faceValue: CardValues.CARD_8, suit: CardSuits.HEARTS },
	{ faceValue: CardValues.CARD_8, suit: CardSuits.SPADES },
	{ faceValue: CardValues.CARD_10, suit: CardSuits.SPADES },
	{ faceValue: CardValues.CARD_K, suit: CardSuits.SPADES },
];

const CardDeck: FC<CardDeckProps> = (props) => {
	return (
		<div style={{ display: 'flex', marginLeft: props.posRight ? 50 : 0 }}>
			{cards.map((card, index) => (
				<div
					style={{
						marginLeft: -25,
						zIndex: 20 + index,
					}}
					key={index}
				>
					<PlayingCard faceValue={card.faceValue} suit={card.suit} />
				</div>
			))}
		</div>
	);
};

export default CardDeck;
