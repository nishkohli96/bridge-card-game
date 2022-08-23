import { styled } from '@mui/material';

const Circle = styled('div')({
	background: '#bfc7f5',
	width: 250,
	height: 250,
	borderRadius: '50%',
});

const CircularTable = () => {
	return <Circle></Circle>;
};

export default CircularTable;
