import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import svgPaths from './svgPaths';

    function PopUp({ sheet }) {
    const [timeData, setTimeData] = useState(0);
    const iconVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: -200
            },
        visible: {
            opacity: 1,
            scale: [1.5, 1.2, 1],
            y: 0,
            transition: {
                    type: 'spring',
                    damping: 8,
                    mass: 0.5,
                    stiffness: 150,
                },
            },
        exit: {
            opacity: 0,
            scale: [1, 1.2, 1, 0],
            y: 200,
            transition: {
                duration: 0.3,
                type: 'spring',
                damping: 8,
                mass: 0.5,
                stiffness: 150,
            },
        },
    };
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: -800,
            x: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: [-800, 100, 0],
            x: 0,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
                duration: 0.5,
                type: 'spring',
                damping: 5,
                mass: 0.5,
                stiffness: 150,
            },
        },
        exit: {
            opacity: 0,
            scale: 0,
            y: [0, 500],
            x: 0,
            transition: {
                staggerChildren: 0.01,
                staggerDirection: -1,
                duration: 0.5,
                type: 'spring',
                damping: 5,
                mass: 0.5,
                stiffness: 150,
                delay: 0.2,
            },
        },
    };
    const delayCalculator = (text) => {
        const duration = text.flatMap((item) => item.char).length * 0.02;
        // console.log(duration);
        return duration;
    }

    useEffect(() => {
    const interval = setInterval(() => {
        const currentPosition = sheet.sequence.position;
        setTimeData(currentPosition);
        // console.log(currentPosition);
    }, 100);

    return () => clearInterval(interval);
    }, [sheet]);

    const flattenText = (textArray) => {
    return textArray.flatMap((item) =>
        [...item.char].map((char) => ({ char, bold: item.bold }))
    );
    };

    const typeWriterEffect = (textArray, delay, startDelay = 0) => {
    const flattenedText = flattenText(textArray);
    return (
        <>
        {flattenedText.map((item, index) => (
            <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: startDelay + index * delay }}
            style={{
                display: "inline-block",
                fontWeight: item.bold ? "bold" : "normal",
            }}
            >
            {item.char === " " ? "\u00A0" : item.char} {/* Preserve spaces */}
            </motion.span>
        ))}
        </>
    );
    };

    return (
    <motion.div>
        <AnimatePresence>
        {timeData >= 3.193 && timeData <= 3.99 && (
            <motion.div
            key={1}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                    flex rounded-lg p-4 right-0 tracking-normal text-box antialiased
                    overflow-hidden"
            initial={{ x: 100, y: 0, opacity: 0, scale: 0 }}
            animate={{
                x: 100,
                y: 100,
                opacity: 1,
                scale: 1,
                transition: {
                duration: 0.2,
                ease: "easeOut",
                type: "spring",
                damping: 8,
                },
            }}
            exit={{
                x: 100,
                y: [140, 100, 0],
                opacity: 0,
                scale: 0,
                transition: {
                duration: 0.2,
                ease: "easeOut",
                type: "spring",
                damping: 8,
                },
            }}
            >
            <p>{typeWriterEffect(text1, 0.05)}</p>
            </motion.div>
        )}
        {timeData >= 6.12 && timeData <= 7.85 && (
            <motion.div
            key={2}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                    flex rounded-lg p-4 right-0 tracking-normal text-box-1 antialiased
                    overflow-hidden"
            initial={{ x: 0, y: 100, opacity: 0.5, scale: 0.3 }}
            animate={{
                x: [0, 120, 100],
                y: 100,
                opacity: 1,
                scale: [0.3, 0.5, 0.7, 1],
                transition: {
                duration: 0.5,
                ease: "linear",
                },
            }}
            exit={{
                x: [100, 120, 0],
                y: 100,
                opacity: 0.5,
                scale: 0.5,
                transition: {
                duration: 0.2,
                ease: "linear",
                },
            }}
            >
            <p>{typeWriterEffect(text2, 0.02)}</p>
            </motion.div>
        )}
        {timeData >= 8.897 && timeData <= 9.562 && (
            <motion.div
            key={3}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-2 antialiased
                                "
            initial={{ x: -100, y: 100, opacity: 0, scale: 0.3 }}
            animate={{
                x: [-1000, 140, 100],
                y: 100,
                opacity: 1,
                scale: [0.3, 0.5, 0.7, 1],
                transition: {
                type: "spring",
                damping: 5,
                mass: 0.5,
                duration: 0.8,
                },
            }}
            exit={{
                x: 960,
                y: 100,
                opacity: 0,
                scale: 0.3,
                transition: {
                type: "spring",
                damping: 10,
                duration: 0.8,
                },
            }}
            >
            <p>{typeWriterEffect(text3, 0.02)}</p>
            </motion.div>
        )}
        {timeData >= 11.879 && timeData <= 12.133 && (
            <motion.div
            key={4}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-3 antialiased
                                "
            initial={{ x: 100, y: -100, opacity: 0, scale: 0.3 }}
            animate={{
                x: 100,
                y: [-1000, 140, 160],
                opacity: 1,
                scale: [0.3, 0.5, 0.7, 1],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                duration: 0.8,
                },
            }}
            exit={{
                x: 100,
                y: 960,
                opacity: 0,
                scale: 0.3,
                transition: {
                type: "spring",
                damping: 10,
                duration: 0.8,
                },
            }}
            >
            <p>{typeWriterEffect(text4, 0.02)}</p>
            </motion.div>
        )}
        {timeData >= 13.761 && timeData <= 14.231 && (
            <motion.div
            key={5}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-4 antialiased
                                "
            initial={{ x: 100, y: -400, opacity: 0, scale: 0.3, rotate: 0 }}
            animate={{
                x: 100,
                y: 140,
                opacity: 1,
                scale: 1,
                rotate: 360,
                transition: {
                type: "spring",
                damping: 8,
                mass: 0.5,
                duration: 0.8,
                scale: {
                    type: "spring",
                    damping: 8,
                    },
                },
            }}
            exit={{
                x: 100,
                y: 600,
                opacity: 0,
                scale: [1.2, 1, 0.3],
                rotate: [400, 360, 0],
                transition: {
                type: "spring",
                damping: 10,
                duration: 0.8,
                scale: {
                    type: "spring",
                    damping: 8,
                    },
                },
            }}
            >
            <ul className="list-disc">
                <li><p>{typeWriterEffect(text5, 0.02)}</p><br/></li>
                <li><p>{typeWriterEffect(text6, 0.02, delayCalculator(text5))}</p></li>
            </ul>
            </motion.div>
        )}
        {timeData >= 15.054 && timeData <= 16.113 && (
            <motion.div
            key={6}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-5 antialiased
                                "
            initial={{ x: 100, y: 600, opacity: 0, scale: 0.3, rotate: 360 }}
            animate={{
                x: 100,
                y: 200,
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                type: "spring",
                damping: 8,
                mass: 0.5,
                duration: 0.8,
                scale: {
                    type: "spring",
                    damping: 8,
                    },
                },
            }}
            exit={{
                x: 100,
                y: -400,
                opacity: 0,
                scale: [1.2, 1, 0.3],
                rotate: [30, 0, 360],
                transition: {
                type: "spring",
                damping: 10,
                duration: 0.8,
                scale: {
                    type: "spring",
                    damping: 8,
                    },
                },
            }}
            >
            <ul className="list-disc">
                <li><p>{typeWriterEffect(text7, 0.02)}</p><br/></li>
                <li><p>{typeWriterEffect(text8, 0.02, delayCalculator(text7))}</p></li>
            </ul>
            </motion.div>
        )}
        {timeData >= 16.466 && timeData <= 17.171 && (
            <motion.div
            key={7}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-6 antialiased
                                "
            initial={{ x: 100, y: -300, opacity: 1, scale: 1, rotate: -90 }}
            animate={{
                x: 100,
                y: [200, 140],
                opacity: 1,
                scale: 1,
                rotate: [-90, 0],
                transition: {
                type: "spring",
                damping: 5,
                mass: 0.5,
                stiffness: 100,
                duration: 0.2,
                y: { duration: 0.5 },
                },
            }}
            exit={{
                x: 100,
                y: 960,
                opacity: 1,
                scale: 1,
                rotate: [0, 90],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                stiffness: 100,
                duration: 0.5,
                },
            }}
            >
            <p>{typeWriterEffect(text9, 0.02)}</p>
            </motion.div>
        )}
        {timeData >= 20.465 && timeData <= 21.876 && (
            <motion.div
            key={8}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-7 antialiased
                                flex-col"
            initial={{ x: 100, y: 200, opacity: 0, scale: 0, rotate: 360 }}
            animate={{
                x: 100,
                y: 200,
                opacity: 1,
                scale: 1,
                rotate: [60, 0],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                ease: "easeIn",
                stiffness: 100,
                duration: 0.8,
                },
            }}
            exit={{
                x: 100,
                y: 200,
                opacity: 0,
                scale: 0,
                rotate: [60, 0, 360],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                stiffness: 100,
                duration: 0.8,
                },
            }}
            >
            <p>{typeWriterEffect(text10, 0.02)}</p>
            <div className='self-end p-4 bottom-0 w-12 h-12 ring-4 ring-white 
                    rounded-full mr-3 flex justify-center items-center hover:cursor-pointer'
                    onClick={() => {
                        const url = "https://resonant-parfait-692825.netlify.app/";
                        window.open(url, "Loong");
                    }}>
                <FontAwesomeIcon icon={faArrowRight} color="#ffffff"/>
            </div>
            </motion.div>
        )}
        {timeData >= 22.817 && timeData <= 23.405 && (
            <motion.div
            key={9}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-8 antialiased
                                flex-col"
            initial={{ x: 140, y: 120, opacity: 0, scale: 0, rotate: 360 }}
            animate={{
                x: 140,
                y: 120,
                opacity: 1,
                scale: 1,
                rotate: [60, 0],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                ease: "easeIn",
                stiffness: 100,
                duration: 0.8,
                },
            }}
            exit={{
                x: 140,
                y: 120,
                opacity: 0,
                scale: 0,
                rotate: [60, 0, 360],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                stiffness: 100,
                duration: 0.8,
                },
            }}
            >
            <p>{typeWriterEffect(text11, 0.02)}</p>
            <div className='self-end p-4 bottom-0 w-12 h-12 ring-4 ring-white
                    rounded-full mr-3 flex justify-center items-center hover:cursor-pointer'
                    onClick={() => {
                        const url = "https://super-tartufo-03f63d.netlify.app/";
                        window.open(url, "Pages");
                    }}>
                <FontAwesomeIcon icon={faArrowRight} color="#ffffff"/>
            </div>
            </motion.div>
        )}
        {timeData >= 24.347 && timeData <= 25.012 && (
            <motion.div
            key={10}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-9 antialiased
                                "
            initial={{ x: 960, y: 100, opacity: 0, scale: 0.3 }}
            animate={{
                x: 100,
                y: 100,
                opacity: 1,
                scale: [0.3, 0.5, 0.7, 1],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                duration: 0.8,
                },
            }}
            exit={{
                x: 960,
                y: 100,
                opacity: 0,
                scale: 0.3,
                transition: {
                type: "spring",
                damping: 10,
                duration: 0.8,
                },
            }}
            >
            <ul className='list-outside list-disc flex flex-col justify-start items-start
                    p-4'>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://drive.google.com/file/d/1_wKRgtN-7GBrBLzAOrt1VTOcVYyafzpp/view?usp=sharing";
                            window.open(url, "Java CV");
                        }}>
                        <FontAwesomeIcon icon={faDownload} color="#ffffff"/>
                        <p>Java CV</p>
                    </div>
                </li>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://drive.google.com/file/d/1tj4B3G2RTHOXn0K_99PojMHcc2kxaVGA/view?usp=sharing";
                            window.open(url, "JavaScript CV");
                        }}>
                        <FontAwesomeIcon icon={faDownload} color="#ffffff"/>
                        <p>JavaScript CV</p>
                    </div>
                </li>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://drive.google.com/file/d/1hFGOsB_j65hfdXdTeM2RGSs3V6gjW8CY/view?usp=sharing";
                            window.open(url, "Python CV");
                        }}>
                        <FontAwesomeIcon icon={faDownload} color="#ffffff"/>
                        <p>Python CV</p>
                    </div>
                </li>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://www.linkedin.com/in/pranav-hingorani-b87320192/";
                            window.open(url, "LinkedIn Profile");
                        }}>
                        <FontAwesomeIcon icon={faLinkedin} color="#ffffff"/>
                        <p>LinkedIn</p>
                    </div>
                </li>
                <li>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://github.com/pranav9012/Projects";
                            window.open(url, "Github Projects");
                        }}>
                        <FontAwesomeIcon icon={faGithub} color="#ffffff"/>
                        <p>Github</p>
                    </div>
                </li>
            </ul>
            </motion.div>
        )}
        {timeData >= 26.857 && timeData <= 27.256 && (
            <motion.div
            key={11}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-10 antialiased
                                flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            {
                svgPaths.map((icon, index) => {
                    return (
                        <motion.img 
                            key={index}
                            src={icon}
                            className='w-20 h-20 m-2'
                            variants={iconVariants}
                            transition={{duration: 0.2}}
                        />
                    );
                })
            }
            </motion.div>
        )}
        {timeData >= 28.45427 && (
            <motion.div
            key={12}
            className="absolute z-20 text-white text-lg md:text-2xl bg-[#1b203a]/60
                                flex rounded-lg p-4 text-box-11 antialiased
                                flex-col"
            initial={{ x: 100, y: -300, opacity: 1, scale: 1, rotate: -90 }}
            animate={{
                x: 100,
                y: [200, 140],
                opacity: 1,
                scale: 1,
                rotate: [-90, 0],
                transition: {
                type: "spring",
                damping: 5,
                mass: 0.5,
                stiffness: 100,
                duration: 0.2,
                y: { duration: 0.5 },
                },
            }}
            exit={{
                x: 100,
                y: 960,
                opacity: 1,
                scale: 1,
                rotate: [0, 90],
                transition: {
                type: "spring",
                damping: 10,
                mass: 0.5,
                stiffness: 100,
                duration: 0.5,
                },
            }}
            >
            <p>{typeWriterEffect(text12, 0.02)}</p>
            <ul className='list-outside list-disc flex flex-col justify-start items-start
                    p-4'>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://sketchfab.com/3d-models/planet-earth-bce3ea48781c4f02a8c52d2678220d07";
                            window.open(url, "Earth");
                        }}>
                        <p>{typeWriterEffect(text13, 0.02)}</p>
                        <FontAwesomeIcon icon={faArrowRight} color="#ffffff"/>
                    </div>
                </li>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://sketchfab.com/3d-models/star-wars-low-poly-tatooine-skybox-4acf1cbebe674e128b4bf68e9897ae3e";
                            window.open(url, "Skybox");
                        }}>
                        <p>{typeWriterEffect(text14, 0.02)}</p>
                        <FontAwesomeIcon icon={faArrowRight} color="#ffffff"/>
                    </div>
                </li>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://sketchfab.com/3d-models/demon-dragon-full-texture-19035a72cdcb4abfa2c161de32823e6b";
                            window.open(url, "Dragon");
                        }}>
                        <p>{typeWriterEffect(text15, 0.02)}</p>
                        <FontAwesomeIcon icon={faArrowRight} color="#ffffff"/>
                    </div>
                </li>
                <li className='mb-6'>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://sketchfab.com/3d-models/real-time-bones-demo-phoenix-bird-6a8d1fd20a1f46e988d9d06e028f75a0";
                            window.open(url, "Phoenix");
                        }}>
                        <p>{typeWriterEffect(text16, 0.02)}</p>
                        <FontAwesomeIcon icon={faArrowRight} color="#ffffff"/>
                    </div>
                </li>
                <li>
                    <div className='flex justify-center items-center hover:cursor-pointer gap-6 p-2'
                        onClick={() => {
                            const url = "https://sketchfab.com/3d-models/issum-the-town-on-capital-isle-e433923a64d549fabb2d30635d643ab6";
                            window.open(url, "Viking Town");
                        }}>
                        <p>{typeWriterEffect(text17, 0.02)}</p>
                        <FontAwesomeIcon icon={faArrowRight} color="#ffffff"/>
                    </div>
                </li>
            </ul>
            </motion.div>
        )}
        </AnimatePresence>
    </motion.div>
    );
}

const text1 = [
    { char: "Hi, My name is ", bold: false },
    { char: "PranavHingorani ", bold: true },
    { char: "and I'm a  ", bold: false },
    { char: "Software Developer ", bold: true },
    { char: "  from India.👋", bold: false },
    ];

const text2 = [
    { char: "I have around ", bold: false },
    { char: "1 year 6 months", bold: true },
    { char: "of professional experience. My goal is to combine creative thinking and design with an analytical approach to solve problemsat the intersection of business and technology. I work great inteams and can be counted on  to consistently deliver above   expectations.", bold: false },
    ];

const text3 = [
    { char: "I hold a ", bold: false },
    { char: "Bachelor of Technology Degree (B.Tech)", bold: true },
    { char: " in ", bold: false },
    { char: "Electronics and Communication Engineering (ECE)", bold: true },
    { char: " from ", bold: false },
    { char: "The LNM Institute of Information Technology (LNMIIT)", bold: true },
    { char: ", Jaipur, Rajasthan, India. During my undergraduate studies, I developed a strong foundation in programming, starting with ", bold: false },
    { char: "Embedded devices", bold: true },
    { char: " using ", bold: false },
    { char: "C", bold: true },
    { char: "  and ", bold: false },
    { char: "Python", bold: true },
    { char: " in my second year, and later expanding my skills to include ", bold: false },
    { char: "C++", bold: true },
    { char: ", ", bold: false },
    { char: "Java", bold: true },
    { char: ", and ", bold: false },
    { char: "JavaScript", bold: true },
    { char: ". Upon  completing my fourth year, I was offered a job by ", bold: false },
    { char: "   Paras Anti-Drone Technologies", bold: true },
    { char: ", a prominent company in the ", bold: false },
    { char: "military and defense sector", bold: true },
    { char: ", marking a significant milestone in my early career.", bold: false }
];

const text4 = [
    { char: "During my tenure at ", bold: false },
    { char: "Paras Anti-Drone Technologies", bold: true },
    { char: ", I served asa ", bold: false },
    { char: "Full-Stack Developer", bold: true },
    { char: " for a   period of 1 year and 6 months.  Throughout my tenure, I contributed to multiple projects catering to ", bold: false },
    { char: "Academic", bold: true },
    { char: " purposes, as well  as ", bold: false },
    { char: "Defense", bold: true },
    { char: " and ", bold: false },
    { char: "Military", bold: true },
    { char: " applications, in addition to internal employee-facing projects. Notable   examples of my work can be found further ahead", bold: false }
];

const text5 = [
    { char: "Developed a ", bold: false },
    { char: "component library", bold: true },
    { char: "for an open-source software,", bold: false },
    { char: " GNU Radio", bold: true },
    { char: ". This library enabled ", bold: false },
    { char: "seamless integration", bold: true },
    { char: " ofour product with GNU Radio, ultimatelybenefiting over ", bold: false },
    { char: "200+", bold: true },
    { char: "community users", bold: false }
];

const text6 = [
    { char: "Made significant ", bold: false },
    { char: "contributions", bold: true },
    { char: " to the  development of an ", bold: false },
    { char: "EM Sensing System", bold: true },
    { char: ", which successfully displayed ", bold: false },
    { char: "intensity-based data", bold: true },
    { char: " on a map. Additionally, ", bold: false },
    { char: "Implemented cloud integration", bold: true },
    { char: ", resulting in a ", bold: false },
    { char: "35%", bold: true },
    { char: " reduction in processing time", bold: false }
];

const text7 = [
    { char: "I successfully ", bold: false },
    { char: "optimized", bold: true },
    { char: " server-side logicto boost application efficiency by ", bold: false },
    { char: "25%", bold: true },
    { char: ",  thereby ", bold: false },
    { char: "streamlining", bold: true },
    { char: " data processing  and integration with front-end systems", bold: false }
];

const text8 = [
    { char: "Optimized core component library, ", bold: false },
    { char: "     resulting in significant improvement  in response time", bold: true },
    { char: ", reducing it from 400-500ms to 5ms, thereby significantly enhancing overall system ", bold: false },
    { char: "performance", bold: true },
    { char: " and user experience", bold: false }
];

const text9 = [
    { char: "Now, let's have a look at some  of my projects", bold: false },
];

const text10 = [
    { char: "Developed a fully responsive a fully responsive eCommerce website, offering a seamless shopping experience, ", bold: false },
    { char: "including", bold: true },
    { char: " dynamic product url and a persistent cart. The frontend was built using ", bold: false },
    { char: "React", bold: true },
    { char: " and ", bold: false },
    { char: "Tailwind CSS", bold: true },
    { char: ",ensuring mobile compatibility with a collapsible navbar. The backend was implemented ", bold: false },
    { char: "using", bold: true },
    { char: " Node.js, Django, and Spring Boot, utilizing ", bold: false },
    { char: "PostgreSQL as", bold: true },
    { char: " database  for managing product data", bold: false }
];

const text11 = [
    { char: "Created a secure, efficient, and responsive note-takingweb application, allowing users to ", bold: false },
    { char: "manage", bold: true },
    { char: " notes with or without logging in. The frontend was designed with ", bold: false },
    { char: "React", bold: true },
    { char: " and ", bold: false },
    { char: "Tailwind CSS", bold: true },
    { char: ", offering a clean and user-friendly interface. The backend, powered by ", bold: false },
    { char: "Django", bold: true },
    { char: ", ", bold: false },
    { char: "Node.js", bold: true },
    { char: ", and ", bold: false },
    { char: "Spring Boot", bold: true },
    { char: ", utilizing ", bold: false },
    { char: "PostgreSQL", bold: true },
    { char: " as database for user & note storage. Passwords are stored as  ", bold: false },
    { char: "hash. ", bold: true },
    { char: "Supports ", bold: false },
    { char: "addition", bold: true },
    { char: ", ", bold: false },
    { char: "deletion", bold: true },
    { char: ", and ", bold: false },
    { char: "update ", bold: true },
    { char: "of notes. It is also mobile compatible.", bold: false }
];

const text12 = [
    { char: "Credits: ", bold: false },
];

const text13 = [
    { char: "Planet Earth Model by", bold: false },
    { char: " kinga_kroliczek", bold: true },
];

const text14 = [
    { char: "Skybox Model by", bold: false },
    { char: " Oscar RP", bold: true },
];

const text15 = [
    { char: "Dragon Model by", bold: false },
    { char: " endlessvoidmc", bold: true },
];

const text16 = [
    { char: "Phoenix Model by", bold: false },
    { char: " SketchFab Enterprise", bold: true },
];

const text17 = [
    { char: "Viking Town Model by", bold: false },
    { char: " Olee", bold: true },
];


    export default PopUp;
