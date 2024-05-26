import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import useTheme from '../context/theme';


const Theme = () => {
  const [isLight, setLight]=useState(false);
  const {themeMode, lightTheme, darkTheme}=useTheme();

  const handleClick=()=>{
    setLight((prev)=>!prev);
    console.log(isLight);
    if(isLight){
        lightTheme();
    }
    else{
        darkTheme();
    }
  }


  return (
    <div className='hidden lg:flex flex-col top-[25%] left-0 fixed'>
        <ul>
            <li onClick={handleClick} className={`flex justify-between items-center h-12 px-8 text-white dark:bg-gray-500 bg-gray-400 hover:scale:105 duration-300 rounded-md ml-[-20px] cursor-pointer`}>
                <MdDarkMode size={30}/>
            </li>
        </ul>
    </div>
  )
}

export default Theme