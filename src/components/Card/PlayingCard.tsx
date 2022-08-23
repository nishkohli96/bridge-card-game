import { FC } from 'react';
import { Card, styled } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { CardSuits, PlayingCardProps } from 'types';
import CardSuitIcon from './CardSuitIcon';

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
		position: 'sticky',
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
