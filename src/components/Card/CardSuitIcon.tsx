import { FC } from 'react';
import Icon from '@mui/material/Icon';
import { CardSuits } from 'types';
import clubIcon from 'assets/images/club.png';
import diamondIcon from 'assets/images/diamond.png';
import heartIcon from 'assets/images/heart.png';
import spadesIcon from 'assets/images/spade.png';

interface CardSuitIconProps {
	suit: CardSuits;
}

const CardSuitIcon: FC<CardSuitIconProps> = (props) => {
	const { suit } = props;
	const suitIcon =
		suit === CardSuits.CLUBS
			? clubIcon
			: suit === CardSuits.DIAMONDS
			? diamondIcon
			: suit === CardSuits.HEARTS
			? heartIcon
			: spadesIcon;
	return (
		<Icon>
			<img
				src={suitIcon}
				style={{ width: 24, height: 24 }}
				alt="card-suit"
			/>
		</Icon>
	);
};

export default CardSuitIcon;
