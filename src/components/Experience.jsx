import React from 'react'

const Experience = () => {
  const tech=[
    {
        id:1,
        src:"https://cdn-icons-png.flaticon.com/512/174/174854.png",
        title:"HTML",
        style:"shadow-orange-500",
    },
    {
        id:2,
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
        title:"CSS",
        style:"shadow-blue-500",
    },
    {
        id:3,
        src:"https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
        title:"JavaScript",
        style:"shadow-yellow-500",
    },
    {
        id:4,
        src:"https://blog.teamtreehouse.com/wp-content/uploads/2015/05/87a5a0fdc86455c3f94b0b0eebfdb1b9_400x400.png",
        title:"TypeScript",
        style:"shadow-white",
    },
    {
        id:5,
        src:"https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
        title:"React",
        style:"shadow-blue-600",
    },
    {
        id:6,
        src:"https://static-00.iconduck.com/assets.00/tailwind-css-icon-144x86-czphjb87.png",
        title:"Tailwind",
        style:"shadow-sky-400",
    },
    {
        id:7,
        src:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
        title:"Github",
        style:"shadow-gray-400",
    },
    {
        id:8,
        src:"https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
        title:"Mongodb",
        style:"shadow-green-400",
    },

  ]
  return (
    <div name="skills" className='w-full h-auto bg-gradient-to-b dark:from-gray-800 dark:to-black  from-gray-200 to-white pt-[70px] md:pt-0 dark:text-white pb-4'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full dark:text-white px-6 md:px-25'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    tech.map((techItem)=>(
                        <div key={techItem.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-r-lg ${techItem.style}`}>
                            <div className='flex flex-col justify-center items-center h-full'>
                               <img src={techItem.src} alt="" className='w-20 mx-auto my-auto'/>
                               <p className='mt-4'>{techItem.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience