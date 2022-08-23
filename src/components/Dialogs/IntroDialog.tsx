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
import { CenterDiv, Header } from '../Common';
import { useAppDispatch, useAppSelector, toggle } from 'redux-store';
import cardsImg from 'assets/images/cards.png';

const IntroDialog = () => {
	const [open, setOpen] = useState(true);
	const [cbValue, setCbValue] = useState(false);
	const dispatch = useAppDispatch();
	const shouldDialogOpen = useAppSelector(
		(state) => state.appSetup.helpDialogOpen
	);

	const handleClose = () => {
		setOpen(false);
		cbValue && dispatch(toggle());
	};
	const handleCbChange = () => setCbValue((prevVal) => !prevVal);

	return (
		<Dialog onClose={handleClose} open={open && shouldDialogOpen}>
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
					label="Don't show this dialog again."
					control={
						<Checkbox checked={cbValue} onChange={handleCbChange} />
					}
				/>
			</DialogContent>
			<DialogActions>
				<Button
					variant="outlined"
					sx={{ marginRight: 2 }}
					onClick={handleClose}
				>
					New Game
				</Button>
				<Button
					variant="contained"
					startIcon={<YouTubeIcon />}
					onClick={handleClose}
					target="_blank"
					component="a"
					href="https://www.youtube.com/watch?v=2IomnCvxWzM&t=847s"
				>
					Learn Bridge
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default IntroDialog;
