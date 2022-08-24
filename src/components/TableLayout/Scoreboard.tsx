import { Drawer } from '@mui/material';
import { CenterDiv, Header } from 'components';
import InfoIcon from '@mui/icons-material/Info';
import { Players } from 'types';

interface ScoreboardProps {
	open: boolean;
	handleClose: Function;
}

const Scoreboard = (props: ScoreboardProps) => {
	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.handleClose()}
		>
			<div
				style={{
					padding: '30px 20px 20px 20px',
					background: '#1976d2',
					width: '20vw',
					height: '100%',
					color: 'white',
				}}
			>
				<CenterDiv>
					<Header style={{ color: 'white', fontWeight: 800 }}>
						Scorecard
					</Header>
				</CenterDiv>
				<p>
					This is the initial score when a player has all 13 cards in
					hand.
				</p>
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
				<div
					style={{
						position: 'absolute',
						padding: 10,
						bottom: 20,
						right: 20,
						left: 20,
						background: '#d9eff780',
						borderRadius: 10,
					}}
				>
					<div>
						<InfoIcon />
					</div>
					An Ace is worth four points, a King is worth three points, a
					Queen is worth two, and a Jack is worth one. Other cards are
					not worth points.
				</div>
			</div>
		</Drawer>
	);
};

export default Scoreboard;
