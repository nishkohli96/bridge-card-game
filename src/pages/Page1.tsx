import { FC } from 'react';
import { PlayingCard, CardSuits, CardValues } from 'components';

const Page1: FC = () => {
	return (
		<div style={{ padding: 40 }}>
			<PlayingCard
				faceValue={CardValues.CARD_10}
				suit={CardSuits.CLUBS}
			/>
		</div>
	);
};

export default Page1;
