import { useMemo } from 'react';
import { Grid, styled } from '@mui/material';
import {
	CardDeck,
	IntroDialog,
	generateCardsArray,
	calculatePlayerScore,
} from 'components';
import PlayTable from './PlayTable';
import {
	useAppSelector,
	shuffledCardsSelector,
	turnOfPlayerSelector,
} from 'redux-store';
import { Players } from 'types';
import Scoreboard from './Scoreboard';

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
	const allCards = useMemo(() => generateCardsArray(cards), [cards]);
	const scoreNorth = calculatePlayerScore(allCards.slice(0, 13));

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
				<Grid container item xs={8} justifyContent="flex-end">
					<CardDeck
						cards={allCards.slice(0, 13)}
						isVisible={turnOfPlayer === Players.NORTH}
					/>
				</Grid>
				<Grid container item xs={4}>
					<StyledText>{Players.NORTH}</StyledText>
				</Grid>
			</Grid>
			<Grid container item xs={12}>
				<Grid
					container
					item
					xs={3}
					justifyContent="flex-end"
					alignItems="center"
				>
					<StyledText>{Players.WEST}</StyledText>
				</Grid>
				<Grid
					container
					item
					xs={2}
					justifyContent="flex-end"
					alignItems="center"
				>
					<div style={{ transform: 'rotate(90deg)' }}>
						<CardDeck
							cards={allCards.slice(39, 52)}
							isVisible={turnOfPlayer === Players.WEST}
						/>
					</div>
				</Grid>
				<Grid container item xs={3} justifyContent="center">
					<PlayTable />
				</Grid>
				<Grid
					container
					item
					xs={2}
					justifyContent="flex-start"
					alignItems="center"
				>
					<div
						style={{
							transform: 'rotate(270deg)',
							marginTop: -50,
						}}
					>
						<CardDeck
							cards={allCards.slice(13, 26)}
							isVisible={turnOfPlayer === Players.EAST}
						/>
					</div>
				</Grid>
				<Grid container item xs={2} alignItems="center">
					<StyledText>{Players.EAST}</StyledText>
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
				<Grid container item xs={8} justifyContent="flex-end">
					<CardDeck
						cards={allCards.slice(26, 39)}
						isVisible={turnOfPlayer === Players.SOUTH}
					/>
				</Grid>
				<Grid container item xs={4}>
					<StyledText>{Players.SOUTH}</StyledText>
				</Grid>
			</Grid>
			<IntroDialog />
		</Grid>
	);
};

export default TableLayout;
