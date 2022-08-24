import { FC, useState } from 'react';
import { AppBar, Toolbar, Tooltip, Typography } from '@mui/material';
import { ResetGameDialog, StyledIconButton, TableLayout } from 'components';
import { RestartAlt, Visibility, Scoreboard } from '@mui/icons-material';
import { toggleCardsVisibility, useAppDispatch } from 'redux-store';

const HomePage: FC = () => {
	const [resetDialogOpen, setResetDialogOpen] = useState(false);
	const dispatch = useAppDispatch();
	const toggleDialog = () => setResetDialogOpen((state) => !state);

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
						<StyledIconButton onClick={toggleDialog}>
							<Scoreboard />
						</StyledIconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<TableLayout />
			<ResetGameDialog
				open={resetDialogOpen}
				handleClose={toggleDialog}
			/>
		</div>
	);
};

export default HomePage;
