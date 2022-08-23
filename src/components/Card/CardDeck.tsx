import { FC } from 'react';
import { PlayingCard } from './PlayingCard';
import { PlayingCardProps } from 'types';

export interface CardDeckProps {
	posRight?: boolean;
	cards: PlayingCardProps[];
	// numCards: number;
}

const CardDeck: FC<CardDeckProps> = (props) => {
	const highlightCard = (event: any) => {
		const isSelected = event.target.classList.contains('selected');
		isSelected
			? event.target.classList.remove('selected')
			: event.target.classList.add('selected');
	};

	return (
		<div style={{ display: 'flex', marginLeft: props.posRight ? 50 : 0 }}>
			{props.cards.map((card, index) => (
				<div
					style={{
						marginLeft: -25,
						zIndex: 20 + index,
					}}
					key={index}
					onClick={highlightCard}
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
