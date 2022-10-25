import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Header from '../Header';
import Background from '../assets/home_new.jpg';
import classes from './Home.module.css';
import AnimatedText from '../components/ui/AnimatedText';
import StaggeredScroll from '../components/ui/StaggeredScroll';
import { Link } from 'react-router-dom';
import ImageInfo from '../components/ui/ImageInfo';
import { ArrowForward } from '@mui/icons-material';

export default function Home() {
    const [currentBackground, setCurrentBackground] = useState('low');
    const [contentRevealed, setContentRevealed] = useState(false);
    const [image, setImage] = useState();

    useEffect(() => {
        // const loadImage = () => {
        //     return new Promise((resolve, reject) => {
        //         const loadedImage = new Image();
        //         loadedImage.src = `http://${window.location.host}/assets/home_new.jpg`;
        //         loadedImage.onload = () => {
        //             window.setTimeout(() => {
        //                 resolve(loadedImage);
        //             }, 1000);
        //         }

        //         loadedImage.onerror = err => reject(err)
        //     });
        // }

        // loadImage().then(img => {
        //     setImage(img);
        //     setCurrentBackground('high');
        //     console.log(image);

        //     window.setTimeout(() => {
        //         setContentRevealed(true);
        //     }, 2000);
        // })

        window.setTimeout(() => {
            setCurrentBackground('high');
            window.firstLoad = false;
        }, window.firstLoad === false ? 200 : 1000);

        window.setTimeout(() => {
            setContentRevealed(true);
        }, window.firstLoad === false ? 2000 : 2800);
    }, []);

    return (
        <motion.div initial={{ opacity: 0, scale: 0.8, position: 'fixed', top: 0, left: 0 }} animate={{ opacity: 1, scale: 1, position: 'fixed', top: 0, left: 0 }} transition={{ bounceStiffness: 100 }} exit={{ opacity: 1, scale: 1, position: 'fixed', top: 0, left: '-100%' }} style={{ height: "100%", width: "100%", overflow: "hidden" }}>
            <Header Title="Home" />
            <div className={currentBackground === 'low' ? classes.loadingOverlay : classes.loadingOverlayDisappear}></div>
            <img src={Background} className={classes.homeBackground} alt="20 Fenchurch Street Building" />
            {/*currentBackground === 'high' && <img src={image.path[0].currentSrc} className={classes.homeBackground} alt="20 Fenchurch Street Building" />*/}
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
                                <div className={classes.exploreHolder}>
                                    <AnimatedText fontSize="2rem" inline>Explore</AnimatedText>
                                    <ArrowForward fontSize="large" className={classes.exploreArrow} />
                                </div>
                            </Link>
                            <ImageInfo Source="https://unsplash.com/photos/6QM2OEO_-FQ">Old and New</ImageInfo>
                        </div>
                    </div>}
                </div>
            }
        </motion.div>
    )
}