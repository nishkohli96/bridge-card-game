import { styled } from '@mui/material';

export const CenterDiv = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export const Header = styled('div')(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: 24,
}));
