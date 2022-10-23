import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<motion.div initial={{ position: 'fixed', top: 0, left: '100%' }} animate={{ position: 'fixed', top: 0, left: 0 }} exit={{ position: 'fixed', top: 0, left: '100%' }} style={{ height: "calc(100% - 8rem)", overflow: "hidden", padding: '4rem' }} transition={{ type: 'spring', stiffness: 50 }}>
			About
		</motion.div>
	)
}