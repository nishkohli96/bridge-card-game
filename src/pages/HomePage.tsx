import { FC } from 'react';
import { TableLayout } from 'components';
import { AppBar, Toolbar, Typography } from '@mui/material';

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
				</Toolbar>
			</AppBar>
			<TableLayout />
		</div>
	);
};

export default HomePage;
