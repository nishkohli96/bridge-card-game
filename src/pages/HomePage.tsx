import { FC } from 'react';
import { TableLayout } from 'components';
import { AppBar, Toolbar, Tooltip, Typography } from '@mui/material';
import { StyledIconButton } from 'components';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

const HomePage: FC = () => {
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
						<StyledIconButton>
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
		</div>
	);
};

export default HomePage;
