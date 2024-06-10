import React from 'react';
import {SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiFirebase, SiNextdotjs, SiTypescript, SiAngularjs, SiVuedotjs, SiNuxtdotjs, SiNodedotjs, SiNestjs, SiMysql, SiSqlite, SiPostgresql, SiMongodb, SiHasura, SiGit} from 'react-icons/si'

const skills = [
  {name: "HTML", icon: <SiHtml5 color='#e34f26' size={64} />},
  {name: "CSS", icon: <SiCss3 color='#2965F1' size={64} />},
  {name: "JavaScript", icon: <SiJavascript color='#F7DC6F' size={64} />},
  {name: "TypeScript", icon: <SiTypescript color='#3178C6' size={64} />},
  {name: "React", icon: <SiReact color='#61DAFB' size={64} />},
  {name: "Next", icon: <SiNextdotjs color='#000000' size={64} />},
  {name: "Angular", icon: <SiAngularjs color='#DD0031' size={64} />},
  {name: "Vue", icon: <SiVuedotjs color='#41B883' size={64} />},
  {name: "Nuxt", icon: <SiNuxtdotjs color='#00DC82' size={64} />},
  {name: "Node", icon: <SiNodedotjs color='#339933' size={64} />},
  {name: "Nest", icon: <SiNestjs color='#E0234E' size={64} />},
  {name: "MySQL", icon: <SiMysql color='#4479A1' size={64} />},
  {name: "SQLite", icon: <SiSqlite color='#003B57' size={64} />},
  {name: "PostgreSQL", icon: <SiPostgresql color='#336791' size={64} />},
  {name: "Firebase", icon: <SiFirebase color='#FFCA28' size={64} />},
  {name: "MongoDB", icon: <SiMongodb color='#47A248' size={64} />},
  {name: "Hasura", icon: <SiHasura color='#1EB4D4' size={64} />},
  {name: "Tailwind", icon: <SiTailwindcss color='#1EB4D4' size={64} />},
  {name: "Git", icon: <SiGit color='#e34f26' size={64} />},
  {name: "GitHub", icon: <SiGithub color='#ddd' size={64} />},
]

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 flex py-16'>
      <div className='max-w-[1240px] mx-auto w-full flex flex-col justify-center h-full'>
        <p className='text-xl font-bold tracking-widest uppercase text-[#1cff81]'>
          Habilidades
        </p>
        <h2 className='py-4'>Tenho conhecimento em</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill) => (
            <div className='p-4 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='justify-center w-full items-center flex text-center content-center'>
                <div className='sm:flex gap-2 justify-center sm:justify-evenly sm:w-full items-center'>
                  {skill.icon}
                  <h3 className='pt-3 sm:pt-0'>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;