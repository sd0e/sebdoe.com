import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';

import classes from './PageButton.module.css';
import { Link } from 'react-router-dom';

export default function PageButton({ Number, Title, To }) {
	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						padding: '1rem',
						display: 'block',
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Link to={To} aria-label={`A link to the page ${To}`}>
				<Button>
					<div className={classes.pageButtonContentHolder}>
						<span className={classes.pageNumber}>{Number}</span>
						<span className={classes.pageTitle}>{Title}</span>
					</div>
				</Button>
			</Link>
		</ThemeProvider>
	)
}