import React from 'react';
import {SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiFirebase, SiNextdotjs} from 'react-icons/si'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 flex py-16'>
      <div className='max-w-[1240px] mx-auto w-full flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#a593f3]'>
          Habilidades
        </p>
        <h2 className='py-4'>Tenho conhecimento em</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='sm:flex justify-center sm:justify-evenly sm:w-full items-center'>
                <SiHtml5 color='#e34f26' size={64}/>
                <h3 className='pt-3 sm:pt-0'>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='sm:flex justify-center sm:justify-evenly sm:w-full items-center'>
                <SiCss3 color='#2965f1' size={64}/>
                <h3 className='pt-3 sm:pt-0'>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='flex flex-col sm:flex-row justify-center sm:justify-evenly sm:w-full items-center'>
                <SiJavascript color='#FFD600' size={64}/>
                <h3 className='pt-3 sm:pt-0'>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='sm:flex justify-center sm:justify-evenly sm:w-full items-center'>
                <SiReact color='#80DEEA' size={64}/>
                <h3 className='pt-3 sm:pt-0'>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='sm:flex justify-center sm:justify-evenly sm:w-full items-center'>
                <SiTailwindcss color='#00ACC1' size={64}/>
                <h3 className='pt-3 sm:pt-0'>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='sm:flex justify-center sm:justify-evenly sm:w-full items-center'>
                <SiFirebase color='#FFC400' size={64}/>
                <h3 className='pt-3 sm:pt-0'>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='sm:flex justify-center sm:justify-evenly sm:w-full items-center'>
                <SiGithub color='#fff' size={64}/>
                <h3 className='pt-3 sm:pt-0'>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid-cols-2 gap-4 justify-center w-full items-center flex text-center'>
              <div className='sm:flex justify-center sm:justify-evenly sm:w-full items-center'>
                <SiNextdotjs color='#000' size={64}/>
                <h3 className='pt-3 sm:pt-0'>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;