import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: "https://cdn.dribbble.com/userupload/13624455/file/still-18c2554c70e71dc71b9619bb19387f4d.gif?resize=400x0",
      demo: "https://karishmatodoreact.netlify.app/",
      code: "https://github.com/Karishmasahoo99/Todo-React",
      description: "A todo list application built using React with features for adding, editing, and deleting tasks."
    },
    {
      id: 2,
      src: "https://t3.ftcdn.net/jpg/03/18/05/58/360_F_318055891_aSOmZ2heKd7EOADVEKNrSvlGBT3oidO8.jpg",
      demo: "https://karishmahangman.netlify.app",
      code: "https://github.com/Karishmasahoo99/hangman",
      description: "A classic hangman game implemented with HTML, CSS, and JavaScript. Guess the word before the man is hanged!"
    },
    {
      id: 3,
      src: "https://t3.ftcdn.net/jpg/04/69/25/24/360_F_469252413_11e4y5LN4xJqys8Fy8pbNdKBm0wygN5I.jpg",
      demo: "https://karishma-snakegame.netlify.app",
      code: "https://github.com/Karishmasahoo99/snake-game",
      description: "A simple snake game created using HTML5 canvas and JavaScript. Control the snake and eat as much food as possible!"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/564x/f8/4a/9f/f84a9f2ee589edacaef51b64dce22f9a.jpg",
      demo: "https://karishma-breakout-game.netlify.app/",
      code: "https://github.com/Karishmasahoo99/Breakout-game",
      description: "A breakout game built with HTML5, CSS3, and vanilla JavaScript. Break all the bricks with the ball!"
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOKBMldaJcFQikUYxSymja5DVU23ooLZD_A&s",
      demo: "https://karishma-ditto-ui.netlify.app/",
      code: "https://github.com/Karishmasahoo99/Ditto",
      description: "Ditto is a modern, responsive website built with Vite and Tailwind CSS."
    },
    {
      id: 6,
      src: "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      demo: "https://karishma-blog.netlify.app/",
      code: "https://github.com/Karishmasahoo99/Blog",
      description: "Blog made using react and Appwrite which is our backend as a service. Use random email to login."
    },
    {
      id: 7,
      src: "./brainwave.svg",
      demo: "https://karishma-brainwave-ui.netlify.app/",
      code: "https://github.com/Karishmasahoo99/brainwave",
      description: "Modern and visually appealing UI-Brainwave"
    },
    // {
    //   id: 9,
    //   src: "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
    //   demo: "",
    //   code: "",
    //   description: ""
    // },
  ];

  return (
    <div name="projects" className='h-auto bg-gradient-to-b px-6 md:px-25 dark:from-black dark:via-black dark:to-gray-800 from-white via-white to-gray-200 w-full dark:text-white'>
      <div className='max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-auto pb-10'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map((project) => (
            <div key={project.id} className='relative group shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
              <div>
                <img src={project.src} alt={project.id} className='rounded-md duration-200 hover:scale-105 w-full h-[250px]' />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 rounded-lg pointer-events-none">
                  <p className="text-white text-center p-4">{project.description}</p>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${!project.demo ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!project.demo}>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${!project.demo ? 'pointer-events-none' : ''}`}
                  >
                    Demo
                  </a>
                </button>
                <button className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${!project.code ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!project.code}>
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${!project.code ? 'pointer-events-none' : ''}`}
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
