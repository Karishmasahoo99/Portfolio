import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='h-auto w-full bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 from-white via-white to-gray-200'>
        <div className='px-6 md:px-25 flex flex-col justify-center max-w-screen-lg mx-auto dark:text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Fill the form to get in touch.</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/zaxdndoa" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none'/>
                    <input type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none'/>
                    <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none'></textarea>
                    <button type='submit' className='dark:text-white bg-gradient-to-r from-purple-400 to-pink-600 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact