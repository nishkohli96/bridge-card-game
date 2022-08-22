import { FC } from 'react';
import { CardValues, CardSuits } from './CardTypes';
import { Card, styled } from '@mui/material';
import CardSuitIcon from './CardSuitIcon';

interface PlayingCardProps {
	faceValue: CardValues;
	suit: CardSuits;
}

const PlayingCard: FC<PlayingCardProps> = (props) => {
	const CardContainer = styled(Card)({
		width: 40,
		height: 60,
		padding: 5,
	});

	const CardValueDiv = styled('span')({
		color:
			props.suit === CardSuits.DIAMONDS || props.suit === CardSuits.HEARTS
				? 'red'
				: 'black',
	});

	const CardValueIcon = styled('div')({
		position: 'relative',
		transform: 'translate(0%,30%)',
	});

	return (
		<CardContainer>
			<CardValueDiv>{props.faceValue}</CardValueDiv>
			<CardValueIcon>
				<CardSuitIcon suit={props.suit} />
			</CardValueIcon>
		</CardContainer>
	);
};

export default PlayingCard;
