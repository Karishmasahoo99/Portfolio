import React from 'react'
import myImage from "../assets/myImage.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 from-white via-white to-gray-200 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:px-25 md:flex-row'>
            <div className='flex flex-col justify-center h-auto'>
                <h2 className='dark:text-white text-4xl mt-20 sm:text-6xl sm:mt-40 md:mt-0 font-bold'>
                    <span className='text-transparent flex flex-col bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Karishma',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h2>
                <p className='text-gray-700 dark:text-gray-500 py-4 max-w-md'>Turning ideas into interactive digital solutions. Expert in React, CSS, and intuitive UI/UX design.Let's build the web, one pixel at a time.</p>
                <div className='flex flex-row'>
                    <button className='group dark:text-white text-black w-fit px-6 py-3 my-2 mr-4 flex
                    items-center rounded-full bg-gradient-to-b from-purple-400 to-pink-600 cursor-pointer hover:scale-105'>
                        Hire me
                    </button>
                    <button className='group  dark:text-white text-black w-fit px-6 py-3 my-2 flex
                    items-center rounded-full bg-transparent border border-pink-700 hover:bg-gradient-to-b from-purple-400 to-pink-600 cursor-pointer'>
                        Download CV
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div className='rounded-full'>
            <img src={myImage} alt="myImage"  className='rounded-full mx-auto w-2/3 hover:scale-105'/>
            </div>
        </div>

    </div>
  )
}

export default Home