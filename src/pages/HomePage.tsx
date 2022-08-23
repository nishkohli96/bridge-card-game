import { FC } from 'react';
import { TableLayout } from 'components';
import {
	AppBar,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

const HomePage: FC = () => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
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
						<IconButton>
							<RestartAltIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Score">
						<IconButton>
							<ScoreboardIcon />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<TableLayout />
		</div>
	);
};

export default HomePage;
