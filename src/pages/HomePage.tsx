import { FC, useState } from 'react';
import { AppBar, Toolbar, Tooltip, Typography } from '@mui/material';
import { ResetGameDialog, StyledIconButton, TableLayout } from 'components';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

const HomePage: FC = () => {
	const [resetDialogOpen, setResetDialogOpen] = useState(false);
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
					<Tooltip title="New Game">
						<StyledIconButton onClick={toggleDialog}>
							<RestartAltIcon />
						</StyledIconButton>
					</Tooltip>
					<Tooltip title="Score">
						<StyledIconButton>
							<ScoreboardIcon />
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
