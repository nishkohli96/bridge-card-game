import { ReactNode } from 'react';
import { styled } from '@mui/material';
import { AosSlide } from 'types';

interface AosDivProps {
	slide: AosSlide;
	children: ReactNode;
}

export const CenterDiv = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
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

export const AosDiv = (props: AosDivProps) => (
	<div data-aos={props.slide} data-aos-duration={600}>
		{props.children}
	</div>
);
