import { FC } from 'react';
import { CardValues, CardSuits } from './CardTypes';
import { Card, styled } from '@mui/material';
import CardSuitIcon from './CardSuitIcon';

interface PlayingCardProps {
	faceValue: CardValues;
	suit: CardSuits;
}

const CardContainer = styled(Card)({
	width: 40,
	height: 60,
	padding: 5,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const CardValueDiv = styled('div')({
	position: 'relative',
	bottom: 15,
	fontSize: 12,
});

const PlayingCard: FC<PlayingCardProps> = (props) => {
	return (
		<CardContainer>
			<CardValueDiv>{props.faceValue}</CardValueDiv>
			<CardSuitIcon suit={props.suit} />
		</CardContainer>
	);
};

export default PlayingCard;
