import { FC } from 'react';
import { PlayingCard, CardSuits, CardValues, TableLayout } from 'components';
import { Typography } from '@mui/material';

const HomePage: FC = () => {
	return (
		<div style={{ padding: 40 }}>
			<Typography mb={2} variant="h4">
				Bridge Game
			</Typography>
			<TableLayout />
			<PlayingCard
				faceValue={CardValues.CARD_10}
				suit={CardSuits.CLUBS}
			/>
		</div>
	);
};

export default HomePage;
