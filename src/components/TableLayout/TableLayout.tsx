import { useMemo } from 'react';
import { Container, Grid, styled } from '@mui/material';
import { AosDiv, CardDeck, IntroDialog, generateCardsArray } from 'components';
import CircularTable from './CircularTable';
import { useAppSelector, shuffledCardsSelector } from 'redux-store';
import { Players } from 'types';

const StyledText = styled('div')(({ theme }) => ({
	fontSize: 20,
	padding: '10px 5px',
	background: theme.palette.success.main,
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
	const allCards = useMemo(() => generateCardsArray(cards), [cards]);
	return (
		<Grid container>
			<Grid container item xs={10}>
				<Grid container spacing={2} style={{ marginTop: 1 }}>
					<Grid container item xs={12} justifyContent="center">
						<StyledText>{Players.NORTH}</StyledText>
					</Grid>
					<Grid container item xs={12} justifyContent="center">
						<AosDiv slide="slide-down">
							<CardDeck cards={allCards.slice(0, 13)} />
						</AosDiv>
					</Grid>
					<Grid container item xs={12} style={{ margin: '20px 0px' }}>
						<Grid
							container
							item
							xs={2}
							justifyContent="center"
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
								<AosDiv slide="slide-left">
									<CardDeck cards={allCards.slice(39, 52)} />
								</AosDiv>
							</div>
						</Grid>
						<Grid container item xs={4} justifyContent="center">
							<CircularTable />
						</Grid>
						<Grid
							container
							item
							xs={2}
							justifyContent="flex-start"
							alignItems="center"
						>
							<div style={{ transform: 'rotate(270deg)' }}>
								<AosDiv slide="slide-up">
									<CardDeck cards={allCards.slice(13, 26)} />
								</AosDiv>
							</div>
						</Grid>
						<Grid
							container
							item
							xs={2}
							justifyContent="center"
							alignItems="center"
						>
							<StyledText>{Players.EAST}</StyledText>
						</Grid>
					</Grid>
					<Grid container item xs={12} justifyContent="center">
						<AosDiv slide="slide-right">
							<CardDeck cards={allCards.slice(26, 39)} />
						</AosDiv>
					</Grid>
					<Grid container item xs={12} justifyContent="center">
						<StyledText>{Players.SOUTH}</StyledText>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={2}>
				pp
			</Grid>
			<IntroDialog />
		</Grid>
	);
};

export default TableLayout;
