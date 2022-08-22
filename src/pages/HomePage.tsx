import { FC } from 'react';
import { TableLayout } from 'components';
import { AppBar, Toolbar, Typography } from '@mui/material';

const HomePage: FC = () => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">Bridge Game</Typography>
				</Toolbar>
			</AppBar>
			<TableLayout />
		</div>
	);
};

export default HomePage;
