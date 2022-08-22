import { Grid, styled } from '@mui/material';
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
		<Grid container spacing={2}>
			<Grid container item xs={12} justifyContent="center">
				<StyledText>North</StyledText>
			</Grid>
			<Grid
				container
				item
				xs={2}
				justifyContent="center"
				alignItems="center"
			>
				<StyledText>West</StyledText>
			</Grid>
			<Grid container item xs={8} justifyContent="center">
				<CircularTable />
			</Grid>
			<Grid
				container
				item
				xs={2}
				justifyContent="center"
				alignItems="center"
			>
				<StyledText>East</StyledText>
			</Grid>
			<Grid container item xs={12} justifyContent="center">
				<StyledText>South</StyledText>
			</Grid>
		</Grid>
	);
};

export default TableLayout;
