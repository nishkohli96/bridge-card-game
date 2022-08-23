import { FC } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from '@mui/material';
import { Header } from 'components';
import { useAppDispatch, shuffleCards } from 'redux-store';

interface ResetGameDialogProps {
	open: boolean;
	handleClose: Function;
}

const ResetGameDialog: FC<ResetGameDialogProps> = (props) => {
	const dispatch = useAppDispatch();
	const { open, handleClose } = props;

	const startNewGame = () => {
		dispatch(shuffleCards());
		handleClose();
	};

	return (
		<Dialog onClose={() => handleClose()} open={open}>
			<DialogTitle>
				<Header>Start a New Game ? </Header>
			</DialogTitle>
			<DialogContent>
				<Typography variant="body1">
					There is already a game in progress.
					<br />
					Would you like to quit this game &amp; start afresh?
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					sx={{ marginRight: 2 }}
					onClick={startNewGame}
				>
					Yes
				</Button>
				<Button variant="outlined" onClick={() => handleClose()}>
					No
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ResetGameDialog;
