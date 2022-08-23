import { useState } from 'react';
import {
	Button,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	Typography,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { CenterDiv, Header } from './Common';
import cardsImg from 'assets/images/cards.png';

const IntroDialog = () => {
	const [open, setOpen] = useState(true);
	const [cbValue, setCbValue] = useState(false);

	const handleClose = () => setOpen(false);
	const handleCbChange = () => setCbValue((prevVal) => !prevVal);

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>
				<Header>Hi there!</Header>
				<Typography variant="body1">
					Have you played Bridge before ??
				</Typography>
			</DialogTitle>
			<DialogContent>
				<CenterDiv>
					<img
						src={cardsImg}
						style={{ width: 100, height: 100 }}
						alt="illustration"
					/>
				</CenterDiv>
				<FormControlLabel
					label="Don't show this dialog in the future"
					control={
						<Checkbox checked={cbValue} onChange={handleCbChange} />
					}
				/>
			</DialogContent>
			<DialogActions>
				<Button variant="outlined" sx={{ marginRight: 2 }}>
					New Game
				</Button>
				<Button
					variant="contained"
					startIcon={<YouTubeIcon />}
					href="https://www.youtube.com/watch?v=2IomnCvxWzM&t=847s"
				>
					Learn Bridge
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default IntroDialog;
