import { useMemo } from 'react';
import { Grid, styled } from '@mui/material';
import {
	CardDeck,
	IntroDialog,
	calculatePlayerScore,
	generateCardsArray,
	getCardsFromCardsArray,
} from 'components';
import PlayTable from './PlayTable';
import {
	useAppSelector,
	useAppDispatch,
	shuffledCardsSelector,
	turnOfPlayerSelector,
	showAllCardsSelector,
	setPlayerCardsOrScore,
} from 'redux-store';
import { Players } from 'types';

const StyledText = styled('div')(({ theme }) => ({
	fontSize: 20,
	padding: '10px 5px',
	background: theme.palette.primary.main,
	borderRadius: 5,
	width: 80,
	height: 30,
	color: 'white',
	textAlign: 'center',
}));

/**
 * The order of turns is North, East, South, West.
 * Thus assigning each stack of the 13 shuffled cards
 * in this order.
 */

const TableLayout = () => {
	const cards = useAppSelector(shuffledCardsSelector);
	const turnOfPlayer = useAppSelector(turnOfPlayerSelector);
	const showAllCards = useAppSelector(showAllCardsSelector);
	const allCards = useMemo(() => generateCardsArray(cards), [cards]);

	const cardsWithNorth = getCardsFromCardsArray(allCards, 0, 13);
	const cardsWithEast = getCardsFromCardsArray(allCards, 13, 26);
	const cardsWithSouth = getCardsFromCardsArray(allCards, 26, 39);
	const cardsWithWest = getCardsFromCardsArray(allCards, 39, 52);

	// useAppDispatch(
	// 	setPlayerCardsOrScore({
	// 		payload: {
	// 			player: Players.NORTH,
	// 			cards: cardsWithNorth,
	// 			score: calculatePlayerScore(cardsWithNorth),
	// 		}
	// 	})
	// );

	const turnOfNorth = turnOfPlayer === Players.NORTH;
	const turnOfEast = turnOfPlayer === Players.EAST;
	const turnOfSouth = turnOfPlayer === Players.SOUTH;
	const turnOfWest = turnOfPlayer === Players.WEST;

	return (
		<Grid container spacing={5}>
			<Grid
				container
				item
				xs={12}
				alignItems="center"
				spacing={2}
				style={{ marginTop: 20 }}
			>
				<Grid container item xs={7} justifyContent="flex-end">
					<CardDeck
						cards={cardsWithNorth}
						isVisible={turnOfNorth || showAllCards}
					/>
				</Grid>
				<Grid item xs={4}>
					<StyledText
						{...(turnOfNorth && { className: 'highlightBlock' })}
					>
						{Players.NORTH}
					</StyledText>
				</Grid>
			</Grid>
			<Grid container item xs={12} alignItems="center">
				<Grid
					container
					direction="column"
					item
					xs={4}
					spacing={2}
					alignItems="flex-end"
				>
					<Grid item>
						<CardDeck
							cards={cardsWithWest}
							isVisible={turnOfWest || showAllCards}
						/>
					</Grid>
					<Grid item>
						<StyledText
							{...(turnOfWest && {
								className: 'highlightBlock',
							})}
						>
							{Players.WEST}
						</StyledText>
					</Grid>
				</Grid>
				<Grid container item xs={4} justifyContent="center">
					<PlayTable />
				</Grid>
				<Grid container direction="column" item xs={4} spacing={2}>
					<Grid item>
						<CardDeck
							cards={cardsWithEast}
							posRight
							isVisible={turnOfEast || showAllCards}
						/>
					</Grid>
					<Grid item>
						<StyledText
							{...(turnOfEast && {
								className: 'highlightBlock',
							})}
						>
							{Players.EAST}
						</StyledText>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				item
				xs={12}
				alignItems="center"
				spacing={2}
				style={{ marginTop: 20 }}
			>
				<Grid container item xs={7} justifyContent="flex-end">
					<CardDeck
						cards={cardsWithSouth}
						isVisible={turnOfSouth || showAllCards}
					/>
				</Grid>
				<Grid item xs={4}>
					<StyledText
						{...(turnOfSouth && { className: 'highlightBlock' })}
					>
						{Players.SOUTH}
					</StyledText>
				</Grid>
			</Grid>
			<IntroDialog />
		</Grid>
	);
};

export default TableLayout;
