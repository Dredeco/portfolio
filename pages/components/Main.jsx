import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import BgImage from '../../public/images/teclado.jpg'

const buttons = [
  {name: "LinkedIn", link: "https://www.linkedin.com/in/andrefersouza/", icon: <FaLinkedinIn /> },
  {name: "Github", link: "https://github.com/dredeco", icon: <FaGithub /> },
  {name: "Facebook", link: "https://facebook.com/andrefersouza", icon: <FaFacebookF /> },
  {name: "Instagram", link: "https://instagram.com/dredeco.dev", icon: <FaInstagram /> }
]

const Main = () => {
  return (
    <div 
    id='home' 
    className='w-full h-[90vh] text-center'
    >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <Image 
          src={BgImage}
          width='1280'
          height='920'
          layout='fill'
          objectFit='cover'
          className='absolute w-full h-[90vh] top-0 left-0 flex -z-10 opacity-10'
        />
        <div>
          <p className='uppercase text-sm tracking-widest mt-36 text-gray-300'>
            Bem vindo ao meu portfólio!
          </p>
          <h1 className='pt-4 text-white text-2xl sm:text-4xl'>
            Olá! Meu nome é<span className='text-[#1cff81]'> André Fernandes</span>,
          </h1>
          <h1 className='py-2 text-white text-2xl sm:text-4xl'>sou um Desenvolvedor <span className='text-[#1cff81]'> Full-stack</span>.</h1>
          <p className='py-4 text-gray-300 sm:max-w-[70%] m-auto'>
            Meu foco é na criação de Landing Pages e Sites Institucionais, sempre buscando explorar novos caminhos.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            {
              buttons.map((button) => (
                <a
                  href={button.link}
                  target='_blank'
                  rel='noreferrer'
                  className='z-50'
                >
                  <div className='rounded-full bg-[#404040] shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#129c50]'>
                    {button.icon}
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;