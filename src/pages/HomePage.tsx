import { FC, useState } from 'react';
import { AppBar, Toolbar, Tooltip, Typography } from '@mui/material';
import {
	ResetGameDialog,
	StyledIconButton,
	Scoreboard,
	IntroDialog,
	TableLayout,
} from 'components';
import {
	RestartAlt,
	Visibility,
	Scoreboard as ScoreboardIcon,
} from '@mui/icons-material';
import { toggleCardsVisibility, useAppDispatch } from 'redux-store';

const HomePage: FC = () => {
	const [resetDialogOpen, setResetDialogOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const dispatch = useAppDispatch();

	const toggleDialog = () => setResetDialogOpen((state) => !state);
	const toggleDrawer = () => setDrawerOpen((state) => !state);

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h5"
						component="div"
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						Bridge
					</Typography>
					<Tooltip title="View All Cards">
						<StyledIconButton
							onClick={() => dispatch(toggleCardsVisibility())}
						>
							<Visibility />
						</StyledIconButton>
					</Tooltip>
					<Tooltip title="New Game">
						<StyledIconButton onClick={toggleDialog}>
							<RestartAlt />
						</StyledIconButton>
					</Tooltip>
					<Tooltip title="Scorecard">
						<StyledIconButton onClick={toggleDrawer}>
							<ScoreboardIcon />
						</StyledIconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<IntroDialog />
			<TableLayout />
			<ResetGameDialog
				open={resetDialogOpen}
				handleClose={toggleDialog}
			/>
			<Scoreboard open={drawerOpen} handleClose={toggleDrawer} />
		</div>
	);
};

export default HomePage;
