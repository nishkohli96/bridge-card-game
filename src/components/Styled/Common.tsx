import { styled } from '@mui/material';

export const CenterDiv = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export const FlexEndDiv = styled('div')({
	display: 'flex',
	alignItems: 'flex-end',
	width: '100%',
	flex: 1,
});

export const Circle = styled('div')({
	background: '#bfc7f5',
	width: 250,
	height: 250,
	borderRadius: '50%',
});

export const Header = styled('div')(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: 24,
}));
