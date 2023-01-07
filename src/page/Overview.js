import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import classes from './Overview.module.css';
import AnimatedText from '../components/ui/AnimatedText';

export default function Overview({ articleText, section }) {
	const splitArray = articleText.toString().split('\r');
	const sectionHeadingPositions = splitArray.map(val => val.toString().includes('\n# '));

	let sections = [];
	let prevIdx = 0;
	sectionHeadingPositions.forEach((isHeading, idx) => {
		if (isHeading) {
			if (prevIdx === 0) {
				prevIdx = idx
			} else {
				sections.push([splitArray[prevIdx], splitArray.slice(prevIdx + 1, idx).join('')]);
				prevIdx = idx;;
			};
		}
	});
	sections.push([splitArray[prevIdx], splitArray.slice(prevIdx + 1, splitArray.length).join('')]);

	return (
		<motion.div initial={{ position: 'fixed', top: 0, left: '100%' }} animate={{ position: 'fixed', top: 0, left: 0 }} exit={{ position: 'fixed', top: 0, left: '100%' }} className={classes.overviewOuter} transition={{ type: 'spring', stiffness: 50 }}>
			{articleText && 
				sections.map(section => {
					let title = section[0].substring(2).trim();
					const showText = !(title.includes('[NoShow]'));
					// There has got to be a better way of doing this, but this works...
					if (!showText) title = title.split('').reverse().slice(8).reverse().join('');

					return (
						<div key={title}>
							{ showText && <AnimatedText fontSize="2rem" className={classes.sectionHeading}>{title}</AnimatedText> }
							<ReactMarkdown remarkPlugins={[ remarkGfm ]} className={classes.markdown}>{section[1]}</ReactMarkdown>
						</div>
					);
				})
			}
		</motion.div>
	)
}