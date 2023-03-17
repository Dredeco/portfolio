import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import getProjectsAction from '../../services/actions/ProjectActions'

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjects = async () => {
            const data = await getProjectsAction();
            setProjects(data)
          }
          getProjects();
    }, [])

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#1cff81]'>
          Projects
        </p>
        <h2 className='py-4'>O que eu já fiz</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project) => (
                <div key={project.name} className='relative flex items-center max-h-[300px] justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                    <img 
                        className='rounded-xl group-hover:opacity-10 w-full h-full object-fill' 
                        src={`${project.img}`}
                        alt='/' 
                    /> 
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>{project.name}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>{project.description}</p>
                        <Link href={project.link}>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects