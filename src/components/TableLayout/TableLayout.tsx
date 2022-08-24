import { useMemo } from 'react';
import { Grid, styled } from '@mui/material';
import {
	CardDeck,
	FlexEndDiv,
	IntroDialog,
	generateCardsArray,
	calculatePlayerScore,
} from 'components';
import PlayTable from './PlayTable';
import {
	useAppSelector,
	shuffledCardsSelector,
	turnOfPlayerSelector,
	showAllCardsSelector,
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
	const scoreNorth = calculatePlayerScore(allCards.slice(0, 13));

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
						cards={allCards.slice(0, 13)}
						isVisible={turnOfNorth || showAllCards}
					/>
				</Grid>
				<Grid container item xs={4}>
					<StyledText
						{...(turnOfNorth && { className: 'highlightBlock' })}
					>
						{Players.NORTH}
					</StyledText>
				</Grid>
			</Grid>
			<Grid container item xs={12} alignItems="center">
				<Grid container direction="column" item xs={4} spacing={2}>
					<Grid container item justifyContent="flex-end">
						<CardDeck
							cards={allCards.slice(39, 52)}
							isVisible={turnOfWest || showAllCards}
						/>
					</Grid>
					<Grid item>
						<FlexEndDiv>
							<StyledText
								{...(turnOfWest && {
									className: 'highlightBlock',
								})}
							>
								{Players.WEST}
							</StyledText>
						</FlexEndDiv>
					</Grid>
				</Grid>
				<Grid container item xs={4} justifyContent="center">
					<PlayTable />
				</Grid>
				<Grid container item xs={4}>
					<CardDeck
						cards={allCards.slice(13, 26)}
						isVisible={turnOfEast || showAllCards}
					/>
				</Grid>
				{/* <Grid container item xs={2}>
					<StyledText
						{...(turnOfEast && { className: 'highlightBlock' })}
					>
						{Players.EAST || showAllCards}
					</StyledText>
				</Grid> */}
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
						cards={allCards.slice(26, 39)}
						isVisible={turnOfSouth || showAllCards}
					/>
				</Grid>
				<Grid container item xs={4}>
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
