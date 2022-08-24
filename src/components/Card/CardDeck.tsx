import { FC, useState } from 'react';
import { PlayingCard } from './PlayingCard';
import { CardInfo } from 'types';

export interface CardDeckProps {
	cards: CardInfo[];
	posRight?: boolean;
	isVisible: boolean;
	// numCards: number;
}

const CardDeck: FC<CardDeckProps> = (props) => {
	const shiftOffset = 25;
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const highlightCard = (event: any, cardIndex: number) => {
		if (!selectedIndex) {
			setSelectedIndex(cardIndex);
			event.target.classList.add('selected');
		} else {
			setSelectedIndex(null);
			event.target.classList.remove('selected');
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				marginLeft: props.posRight ? shiftOffset : 0,
			}}
		>
			{props.cards.map((card, index) => (
				<div
					style={{
						marginLeft: shiftOffset * -1,
						zIndex: 20 + index,
					}}
					key={index}
					onClick={(e) => highlightCard(e, card.index)}
				>
					<PlayingCard
						faceValue={card.faceValue}
						suit={card.suit}
						index={card.index}
						isVisible={props.isVisible}
					/>
				</div>
			))}
		</div>
	);
};

export default CardDeck;
