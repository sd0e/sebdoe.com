import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedText({ children, fontSize = "1rem", className }) {
    const text = children;

    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) controls.start('visible');
        if (!inView) controls.start('hidden');
    }, [controls, inView]);

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: '0.25rem',
        },
        visible: {
            opacity: 1,
            y: '0rem',
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            }
        }
    }
    
    const wordAnimation = {
        hidden: {},
        visible: {},
    }

    return (
        <span aria-label={children} style={{ fontSize: fontSize, color: '#ffffff', display: 'block' }}>
            {text.split(' ').map((word, index) => {
                return <motion.span
                    ref={ref}
                    aria-hidden="true"
                    key={index}
                    initial="hidden"
                    animate={controls}
                    variants={wordAnimation}
                    style={{ display: 'inline-block', marginRight: `${Number(fontSize.substring(0, 1)) / 4}rem`, whiteSpace: 'nowrap' }}
                    transition={{delayChildren: index * 0.25, staggerChildren: 0.05}}
                >
                    {word.split('').map((character, idx) => {
                        return <motion.span
                            aria-hidden="true"
                            key={idx}
                            variants={characterAnimation}
                            style={{ display: 'inline-block', marginRight: '-0.05rem' }}
                            className={className}
                        >
                            {character}
                        </motion.span>
                    })}
                </motion.span>
            })}
        </span>
    )
}