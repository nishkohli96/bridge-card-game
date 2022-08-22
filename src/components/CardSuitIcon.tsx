import { FC } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as clubIcon } from 'assets/icons/club.svg';
import { ReactComponent as diamondIcon } from 'assets/icons/diamond.svg';
import { ReactComponent as heartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as spadesIcon } from 'assets/icons/spades.svg';
import { CardSuits } from './CardTypes';

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
	return <SvgIcon component={suitIcon} viewBox="0 0 24 24"></SvgIcon>;
};

export default CardSuitIcon;
