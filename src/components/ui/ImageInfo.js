import { ImageOutlined } from '@mui/icons-material';
import React from 'react';

import classes from './ImageInfo.module.css';

export default function ImageInfo({ children, Source }) {
	return (
		<a href={Source} rel="noreferrer" target="_blank" className={classes.imageInfoLink}>
			<div className={classes.imageInfoOuter}>
				<ImageOutlined />
				<span className={classes.imageInfoText}>{children}</span>
			</div>
		</a>
	)
}