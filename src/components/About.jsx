// import React from 'react';

// const aboutData = [
//   {
//     id: 1,
//     year: '2011',
//     title: 'Lorem ipsum dolor sit',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     image: 'https://placeimg.com/801/801/nature',
//   },
//   {
//     id: 2,
//     year: '2013',
//     title: 'Vestibulum laoreet lorem',
//     description: 'Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id.',
//     image: 'https://placeimg.com/802/802/nature',
//   },
//   {
//     id: 3,
//     year: '2014',
//     title: 'Phasellus mauris elit',
//     description: 'Mauris cursus magna at libero lobortis tempor. Suspendisse potenti.',
//     image: 'https://placeimg.com/803/803/nature',
//   },
//   {
//     id: 4,
//     year: '2016',
//     title: 'Mauris vitae nunc elem',
//     description: 'Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod.',
//     image: 'https://placeimg.com/800/800/nature',
//   },
// ];

// function About() {
//   return (
//     <div name="about" className="w-full h-auto bg-gradient-to-b dark:from-gray-800 dark:to-black from-gray-200 to-white pt-[70px] md:pt-0 dark:text-white pb-4">
//       <div className="max-w-screen-lg px-6 md:px-25 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
//         </div>
//         <section id="timeline" className="grid md:grid-cols-4 grid-cols-2 justify-center text-center">
//           {aboutData.map((item) => (
//             <div
//               key={item.id}
//               className="tl-item relative overflow-hidden h-[400px] transition-all duration-500 ease-in-out group"
//             >
//               <div
//                 className="tl-bg absolute inset-0 bg-cover bg-center transition-filter duration-500 grayscale group-hover:grayscale-0"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               ></div>
//               <div className="tl-year absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 border-t border-b border-white">
//                 <p className="text-2xl leading-none font-semibold">{item.year}</p>
//               </div>
//               <div className="tl-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
//                 <h1 className="text-xl font-bold uppercase text-blue-500">{item.title}</h1>
//                 <p className="mt-2">{item.description}</p>
//               </div>
//               <div className="tl-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-75"></div>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// }

// export default About;


import React from 'react';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const milestones = [
  { id:1, year: '2022', clg: 'Veer Surendra Sai University of Technology', description:"Bachelor of Technology in Electrical and Electronics Engineering", grad:"CGPA:9.24" },
  { id:2, year: '2018', clg: 'Dr. A.N.K. D.A.V. Public School, Rourkela', description:"XII(Senior Secondary) in Science, CBSE", grad:"95%" },
  { id:3, year: '2016', clg: 'Dr. A.N.K. D.A.V. Public School, Rourkela', description:" X(Matriculation), CBSE", grad:"95%" },
];

const About = () => {
  return (
    <div name="about" className='w-full h-auto bg-gradient-to-b dark:from-gray-800 dark:to-black  from-gray-200 to-white pt-[70px] md:pt-0 dark:text-white pb-4'>
      <div className='max-w-screen-lg px-6 md:px-25 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <div className="relative py-12 mx-auto w-4/5">
          <div className="absolute w-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-blue-500 to-pink-500 h-full z-0"></div>
          {milestones.map((milestone, index) => (
            <Element name={`milestone-${index}`} key={index}>
              <Milestone milestone={milestone} index={index} />
            </Element>
          ))}
        </div>
      </div>
    </div>
  );
};

const Milestone = ({ milestone, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      id={`milestone-${index}`}
      className={`relative my-12 p-4 bg-white shadow-lg rounded-md ${index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'} w-2/3 ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out`}
      style={{ transform: `${index % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)'}` }}
    >
      <h3 className="text-xl font-bold text-black">{milestone.year}</h3>
      <p className='text-black'>{milestone.clg}</p>
      <p className='my-4 text-black'>{milestone.description}</p>
      <p className='text-black'>{milestone.grad}</p>
    </div>
  );
};

export default About;