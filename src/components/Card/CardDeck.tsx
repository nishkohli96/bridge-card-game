import { FC } from 'react';
import { PlayingCard } from './PlayingCard';
import { CardValues, CardSuits, PlayingCardProps } from 'types';

export interface CardDeckProps {
	posRight?: boolean;
	cards: PlayingCardProps[];
	// numCards: number;
}

const CardDeck: FC<CardDeckProps> = (props) => {
	return (
		<div style={{ display: 'flex', marginLeft: props.posRight ? 50 : 0 }}>
			{props.cards.map((card, index) => (
				<div
					style={{
						marginLeft: -25,
						zIndex: 20 + index,
					}}
					key={index}
				>
					<PlayingCard
						faceValue={card.faceValue}
						suit={card.suit}
						index={card.index}
						isVisible={card.isVisible}
					/>
				</div>
			))}
		</div>
	);
};

export default CardDeck;
