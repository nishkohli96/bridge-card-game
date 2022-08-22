import { styled } from '@mui/material';

const Circle = styled('div')(({ theme }) => ({
	background: theme.palette.primary.main,
	width: 400,
	height: 400,
	borderRadius: '50%',
}));

const CircularTable = () => {
	return <Circle></Circle>;
};

export default CircularTable;
