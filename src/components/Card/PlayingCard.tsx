import { FC } from 'react';
import { CardValues, CardSuits } from './CardTypes';
import { Card, styled } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CardSuitIcon from './CardSuitIcon';

export interface PlayingCardProps {
	faceValue: CardValues;
	suit: CardSuits;
	isVisible?: boolean;
}

export const PlayingCard: FC<PlayingCardProps> = (props) => {
	const { isVisible, faceValue, suit } = props;
	const CardContainer = styled(Card)({
		width: 40,
		height: 60,
		padding: 5,
		background: isVisible ? 'white' : '#edb4c1',
	});

	const CardValueDiv = styled('span')({
		color:
			suit === CardSuits.DIAMONDS || suit === CardSuits.HEARTS
				? 'red'
				: 'black',
	});

	const CardValueIcon = styled('div')({
		position: 'relative',
		transform: 'translate(0%,30%)',
	});

	return (
		<CardContainer>
			{isVisible ? (
				<>
					<CardValueDiv>{faceValue}</CardValueDiv>
					<CardValueIcon>
						<CardSuitIcon suit={suit} />
					</CardValueIcon>
				</>
			) : (
				<CardValueIcon>
					<QuestionMarkIcon />
				</CardValueIcon>
			)}
		</CardContainer>
	);
};

export default PlayingCard;
