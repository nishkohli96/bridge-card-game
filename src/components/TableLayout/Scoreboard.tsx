import { CenterDiv, Header } from 'components';
import { Players } from 'types';

const Scoreboard = () => {
	return (
		<div
			style={{ paddingTop: 40, background: 'white', minHeight: '100vh' }}
		>
			<CenterDiv>
				<Header>Scorecard</Header>
			</CenterDiv>
			{Object.values(Players).map((player, index) => (
				<div
					key={index}
					style={{
						marginTop: 20,
						display: 'flex',
						justifyContent: 'center',
						fontSize: 18,
						flex: 1,
					}}
				>
					<div
						style={{
							display: 'flex',
							flex: 0.5,
							fontWeight: 500,
						}}
					>
						{player}
					</div>
					<div>1</div>
				</div>
			))}
		</div>
	);
};

export default Scoreboard;
