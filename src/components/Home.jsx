import React, { useState } from 'react';
import karishma from "../assets/karishma.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import { FaTimes } from 'react-icons/fa';

function Home() {
    const [showMessage, setShowMessage] = useState(false);

    const handleHireMeClick = () => {
        setShowMessage(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
        document.body.style.overflow = 'auto';
    };

    const handleDownloadCV = () => {
        const cvUrl = './KarishmaResume.pdf'; 
        const anchorElement = document.createElement('a');
        anchorElement.href = cvUrl;
        anchorElement.download = 'Karishma_Sahoo_CV.pdf'; // Optional filename
        anchorElement.click();
    };

    return (
        <div name="home" className='h-screen flex items-center justify-center bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 from-white via-white to-gray-200'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center p-6 md:p-10 md:flex-row'>
                <div className='flex flex-col justify-center h-auto text-center md:text-left md:mr-8'>
                    <h2 className='dark:text-white text-4xl mt-20 sm:text-6xl sm:mt-40 md:mt-0 font-bold'>
                        <span className='text-transparent flex flex-col bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
                        <TypeAnimation
                            sequence={[
                                'Karishma',
                                1000,
                                'Frontend developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={80}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            className="typing-effect"
                        />
                    </h2>
                    <p className='text-gray-700 dark:text-gray-500 py-4 max-w-md'>Turning ideas into interactive digital solutions. Expert in React, CSS, and intuitive UI/UX design. Let's build the web, one pixel at a time.</p>
                    <div className='flex flex-row justify-center md:justify-start'>
                        <button 
                            className='group dark:text-white text-black px-6 py-3 my-2 mr-4 flex items-center rounded-full bg-gradient-to-b from-purple-400 to-pink-600 cursor-pointer hover:scale-105'
                            style={{ padding: '12px 24px' }} // Fixed padding instead of width
                            onClick={handleHireMeClick}
                        >
                            Hire me
                        </button>
                        <button 
                            className='group dark:text-white text-black px-6 py-3 my-2 flex items-center rounded-full bg-transparent border border-pink-700 hover:bg-gradient-to-b from-purple-400 to-pink-600 cursor-pointer'
                            style={{ padding: '12px 24px' }} // Fixed padding instead of width
                            onClick={handleDownloadCV}
                        >
                            Download CV
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </button>
                    </div>
                </div>

                {showMessage && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50" style={{ backdropFilter: 'blur(8px)' }}>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md relative">
                            <button
                                className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:cursor-pointer dark:hover:text-gray-200"
                                onClick={handleCloseMessage}
                            >
                                <FaTimes />
                            </button>
                            <p className="text-gray-700 dark:text-gray-300">
                                <TypeAnimation
                                    sequence={[
                                        "I am a dedicated and skilled software engineer with a strong background in web development, specializing in React.js. My professional experience, educational qualifications, and problem-solving abilities make me a strong candidate. I have a proven track record of delivering high-quality projects on time and am passionate about continuous learning and improvement.",
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block' }}
                                    repeat={0}
                                    className="typing-effect"
                                />
                            </p>
                        </div>
                    </div>
                )}

                <div className={`rounded-full mt-8 md:mt-0 ${showMessage ? 'blurred-background' : ''}`}>
                    <img src={karishma} alt="myImage" className='rounded-full mx-auto md:mr-0 w-2/3 hover:scale-105'/>
                </div>
            </div>
        </div>
    );
}

export default Home;
