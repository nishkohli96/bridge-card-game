import { FC } from 'react';
import { PlayingCard, CardSuits, CardValues } from 'components';

const Page1: FC = () => {
	return (
		<div className="root">
			<div style={{ margin: '10px 0px' }}>
				Hi from Page1. Feel free to add your own code 😃.
			</div>
			<PlayingCard
				faceValue={CardValues.CARD_10}
				suit={CardSuits.DIAMONDS}
			/>
		</div>
	);
};

export default Page1;
