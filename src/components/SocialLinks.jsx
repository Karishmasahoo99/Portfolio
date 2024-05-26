import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const SocialLinks = () => {
  const links=[
    {
        id:1,
        child:(
            <>
             Linkedin <FaLinkedin size={25}/> 
             </>
        ),
        href:"https://www.linkedin.com/in/karishma-sahoo-806506157/",
        style:"rounded-tr-md"
    },
    {
        id:2,
        child:(
            <>
             Github <FaGithub size={25}/> 
             </>
        ),
        href:"https://github.com/Karishmasahoo99",
    },
    {
        id:3,
        child:(
            <>
             Mail <HiOutlineMail size={25}/> 
             </>
        ),
        href:"mailto:karishmasahoo30@gmail.com",
    },
    {
        id:4,
        child:(
            <>
             Resume <BsFillPersonLinesFill size={25}/> 
             </>
        ),
        href:"/KarishmaResume.pdf",
        style:"rounded-br-md",
        download:true,
    },
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
                links.map((link)=>(
                    <li key={link.id} className={`flex justify-between items-center w-40 h-12 px-4 dark:bg-gray-500 bg-gray-400 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 ${link?.style}`}>
                        <a 
                        href={link.href} 
                        className='flex justify-between items-center w-full text-white'
                        target='_blank'
                        download={link.download}
                        rel="noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialLinks