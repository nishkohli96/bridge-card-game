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
});

const CardValueDiv = styled('span')({
	position: 'relative',
	top: 0,
});

const CardValueIcon = styled('div')({
	position: 'relative',
	transform: 'translate(25%,10%)',
});

const PlayingCard: FC<PlayingCardProps> = (props) => {
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
