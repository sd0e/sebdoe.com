import React, { useEffect, useState } from 'react';

import classes from './StaggeredScroll.module.css';

export default function StaggeredScroll({ content, freq, lineHeight, style, delay = 0 }) {
	const [animationState, setAnimationState] = useState('hidden');
	const [existingIteration, setExistingIteration] = useState(0);
	let currentIteration = 0;

	const nextIteration = () => {
		const iteration = currentIteration;
		setAnimationState('top');
		window.setTimeout(() => {
			setAnimationState('hidden');
			if (iteration < (content.length - 1)) {
				currentIteration = iteration + 1;
				setExistingIteration(currentIteration);
			} else {
				currentIteration = 0;
				setExistingIteration(currentIteration);
			};
			setAnimationState('middle');
		}, 1000);
	}

	useEffect(() => {
		window.setTimeout(() => {
			setAnimationState('middle');
			window.setInterval(nextIteration, freq);
		}, delay);
	}, []);

	return (
		<div className={classes.staggeredScrollOuter} style={{ height: lineHeight, ...style }}>
			<span className={animationState === 'hidden' ? classes.hidden : (animationState === 'top' ? classes.staggeredScrollItemTop : classes.staggeredScrollItem)} style={{ lineHeight: lineHeight }}>{content[existingIteration]}</span>
		</div>
	)
}