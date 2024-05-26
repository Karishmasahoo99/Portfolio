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
