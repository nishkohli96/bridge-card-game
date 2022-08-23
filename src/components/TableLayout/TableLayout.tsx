import { Container, Grid, styled } from '@mui/material';
import { CardDeck, IntroDialog } from 'components';
import CircularTable from './CircularTable';

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

const TableLayout = () => {
	return (
		<Container>
			<IntroDialog />
			<Grid container spacing={2} style={{ marginTop: 1 }}>
				<Grid container item xs={12} justifyContent="center">
					<StyledText>North</StyledText>
				</Grid>
				<Grid container item xs={12} justifyContent="center">
					<CardDeck />
				</Grid>
				<Grid container item xs={12} style={{ margin: '20px 0px' }}>
					<Grid
						container
						item
						xs={2}
						justifyContent="center"
						alignItems="center"
					>
						<StyledText>West</StyledText>
					</Grid>
					<Grid
						container
						item
						xs={2}
						justifyContent="flex-end"
						alignItems="center"
					>
						<div style={{ transform: 'rotate(90deg)' }}>
							<CardDeck />
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
							<CardDeck posRight />
						</div>
					</Grid>
					<Grid
						container
						item
						xs={2}
						justifyContent="flex-end"
						alignItems="center"
					>
						<StyledText>East</StyledText>
					</Grid>
				</Grid>
				<Grid container item xs={12} justifyContent="center">
					<CardDeck />
				</Grid>
				<Grid container item xs={12} justifyContent="center">
					<StyledText>South</StyledText>
				</Grid>
			</Grid>
		</Container>
	);
};

export default TableLayout;
