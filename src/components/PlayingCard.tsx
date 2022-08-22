import { FC } from 'react';
import { CardValues, CardSuits } from './CardTypes';
import { Card, styled } from '@mui/material';
import CardSuitIcon from './CardSuitIcon';

interface PlayingCardProps {
	faceValue: CardValues;
	suit: CardSuits;
}

const CardContainer = styled(Card)(({ theme }) => ({
	width: 40,
	height: 60,
	padding: 5,
}));

const PlayingCard: FC<PlayingCardProps> = (props) => {
	return (
		<CardContainer>
			<p>{props.faceValue}</p>
			<CardSuitIcon suit={props.suit} />
		</CardContainer>
	);
};

export default PlayingCard;
