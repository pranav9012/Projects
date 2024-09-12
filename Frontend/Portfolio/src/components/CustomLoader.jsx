import { motion } from 'framer-motion';
import React from 'react';
import Viking from '../assets/Viking-Walk-Cycle.gif';

function CustomLoader() {
    // Function to create the typewriter effect
    const typeWriterEffect = (textArray, delay, startDelay = 0) => {
        return (
            <>
                {textArray.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            delay: startDelay + index * delay,
                            // repeat: Infinity
                            }}
                        style={{
                            display: "inline-block",
                            fontWeight: "normal",
                        }}
                    >
                        {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                    </motion.span>
                ))}
            </>
        );
    };

    const loadText = ['L', 'O', 'A', 'D', 'I', 'N', 'G', '.', '.', '.'];
    let counter = 0;
    const totalDelay = loadText.length * 0.02;
    setInterval(() => {
        counter += 1;
        // console.log(counter);
    }, 5000 * totalDelay);

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen w-full z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                src={Viking}
                alt="Loading Viking"
                className="w-80 h-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            />
            <motion.div 
                className="text-6xl font-bold text-white mt-5"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 2, repeat: Infinity, delay: counter}}
                >
                {typeWriterEffect(loadText, 0.2)} {/* Adjust the delay between letters */}
            </motion.div>
        </motion.div>
    );
}

export default CustomLoader;
