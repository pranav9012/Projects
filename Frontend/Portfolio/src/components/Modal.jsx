import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

function Modal({ modalState, setModalState, show }) {
    const BackdropParent = {
        hidden: {
            opacity: 0,
            scale: 1,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
                duration: 0.1,
            }
        },
        exit: {
            opacity: 0,
            scale: 1,
            transition: {
                staggerChildren: 0.01,
                staggerDirection: -1,
                duration: 0.1,
            }
        },
    };
    const ModalChild = {
        hidden: {
            opacity: 1,
            scale: 0.3,
            y: "-100vh",
        },
        visible: {
            opacity: 1,
            scale: [0.5, 1.2, 1],
            y: 0,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 250,
            }
        },
        exit: {
            opacity: 1,
            scale: [1, 0.5, 0.3],
            y: "100vh",
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 250,
            }
        },
    };

    return (
        <AnimatePresence mode='wait'>
            {( !show && modalState ) && (
            <motion.div
                key="backdrop"
                className='w-full h-full flex justify-center items-center absolute bg-black/60 z-30 antialiased'
                variants={BackdropParent}
                initial="hidden"
                animate="visible"
                exit="exit"
                // onClick={() => setModalState(false)} // Close modal on backdrop click
            >
                <motion.div
                    key="modalContent"
                    className="bg-white px-5 py-8 rounded-md shadow-md w-[400px] flex flex-col
                        justify-center items-center z-40 antialiased"
                    variants={ModalChild}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside child area
                >
                    <h2 className="text-2xl font-semibold mb-5">
                        The animation will move with scrollbar past the "start" point
                    </h2>
                    <h3 className="text-lg font-semibold mb-5 text-red-500">
                        <span>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span className='ml-1'>
                            Website is not compatible with mobile devices
                        </span>
                    </h3>
                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{
                            scale: 0.9,
                            transition: { duration: 0.2 },
                        }}
                        className='w-32 h-12 bg-yellow-500 rounded-xl text-xl'
                        onClick={() => setModalState(false)} // Close modal on button click
                    >
                        Close
                    </motion.button>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
