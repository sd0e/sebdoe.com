import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Header from '../Header';
import Background from '../assets/home_new.jpg';
import classes from './Home.module.css';
import AnimatedText from '../components/ui/AnimatedText';

export default function Home() {
    const [currentBackground, setCurrentBackground] = useState('low');

    window.setTimeout(() => {
        setCurrentBackground('high');
    }, 200);

    return (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} style={{ height: "100%", overflow: "hidden" }}>
            <Header Title="Home" />
            <div className={currentBackground === 'low' ? classes.loadingOverlay : classes.loadingOverlayDisappear}></div>
            <img src={Background} className={classes.homeBackground} alt="20 Fenchurch Street Building" />
            {currentBackground === 'high' &&
                <div className={classes.homeContent}>
                    <span className={classes.homeTitle}>Seb Doe</span>
                    <AnimatedText fontSize="4rem">New Code for a New World</AnimatedText>
                    {/* <span className={classes.homeSubtitle}>New Code for<br />a New World</span> */}
                </div>
            }
        </motion.div>
    )
}