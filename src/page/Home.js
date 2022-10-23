import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Header from '../Header';
import Background from '../assets/home_new.jpg';
import classes from './Home.module.css';
import AnimatedText from '../components/ui/AnimatedText';
import StaggeredScroll from '../components/ui/StaggeredScroll';
import { Link } from 'react-router-dom';
import ImageInfo from '../components/ui/ImageInfo';

export default function Home() {
    const [currentBackground, setCurrentBackground] = useState('low');
    const [contentRevealed, setContentRevealed] = useState(false);

    useEffect(() => {
        window.setTimeout(() => {
            setCurrentBackground('high');
        }, 200);

        window.setTimeout(() => {
            setContentRevealed(true);
        }, 2000);
    }, []);

    return (
        <motion.div initial={{ opacity: 0, scale: 0.8, position: 'fixed', top: 0, left: 0 }} animate={{ opacity: 1, scale: 1, position: 'fixed', top: 0, left: 0 }} transition={{ bounceStiffness: 100 }} exit={{ opacity: 1, scale: 1, position: 'fixed', top: 0, left: '-100%' }} style={{ height: "100%", width: "100%", overflow: "hidden" }}>
            <Header Title="Home" />
            <div className={currentBackground === 'low' ? classes.loadingOverlay : classes.loadingOverlayDisappear}></div>
            <img src={Background} className={classes.homeBackground} alt="20 Fenchurch Street Building" />
            {currentBackground === 'high' &&
                <div className={classes.homeContent}>
                    <div>
                        <span className={classes.homeTitle}>Seb Doe</span>
                        <AnimatedText fontSize="4rem">New Code for a New World</AnimatedText>
                        {contentRevealed && <div className={classes.contentToReveal}>
                            <StaggeredScroll
                                content={[
                                    <span className={classes.homeSubtitle}>Software Engineer</span>,
                                    <span className={classes.homeSubtitle}>Student</span>,
                                    <span className={classes.homeSubtitle}>Photographer</span>,
                                ]}
                                freq={3000}
                                lineHeight="3rem"
                                style={{ marginTop: '2rem' }}
                            />
                            {/* <span className={classes.homeSubtitle}>New Code for<br />a New World</span> */}
                            
                        </div>}
                    </div>
                    {contentRevealed && <div className={classes.contentToReveal}>
                        <div className={classes.pageBottomContent}>
                            <Link to="/nav">
                                <AnimatedText fontSize="2rem">Explore</AnimatedText>
                            </Link>
                            <ImageInfo Source="https://unsplash.com/photos/6QM2OEO_-FQ">20 Fenchurch Street</ImageInfo>
                        </div>
                    </div>}
                </div>
            }
        </motion.div>
    )
}