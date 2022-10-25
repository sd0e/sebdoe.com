import React from 'react';
import { motion } from 'framer-motion';
import { Button, createTheme, Grid, ThemeProvider } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

import PageButton from '../components/ui/PageButton';

export default function Nav() {
	const navigate = useNavigate();

	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						display: 'block',
						padding: '1rem',
					},
				},
			},
		},
	});

	return (
		<motion.div
			initial={{ position: 'fixed', top: 0, left: '100%' }}
			animate={{ position: 'fixed', top: 0, left: 0 }}
			exit={{ position: 'fixed', top: 0, left: '100%' }}
			style={{ height: "calc(100% - 8rem)", overflow: "hidden", padding: '4rem' }}
			transition={{ type: 'spring', stiffness: 50 }}
		>
			<ThemeProvider theme={theme}>
				<Grid container spacing={4} direction="row">
					<Grid item>
						<Button aria-label="Go to previous page" onClick={() => navigate(-1)}>
							<ArrowBack style={{ color: '#ffffff', height: '2rem', width: '2rem' }} />
						</Button>
					</Grid>
					<Grid item>
						<Grid container spacing={2} direction="column">
							<Grid item>
								<PageButton Number="00" Title="Home" To="/" />
							</Grid>
							<Grid item>
								<PageButton Number="01" Title="About" To="/about" />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ThemeProvider>
		</motion.div>
	)
}