import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/images/userq.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#1cff81]'>
            Sobre
          </p>
          <h2 className='py-4'>André Fernandes</h2>
          <p className='py-2 text-gray-300'>
          Atualmente, meu foco é na criação de sites responsivos, tanto estáticos quanto utilizando APIs. Tenho interesse em aprender novas tecnologias e aplicá-las em meus projetos. Para criar sites, utilizo as linguagens HTML, CSS, Javascript, ReactJS e NextJS, além de estudar constantemente novas funcionalidades e soluções conforme necessário. Acredito que no desenvolvimento de projetos, é importante usar as melhores ferramentas disponíveis.
          </p>
          <p className='py-2 text-gray-300'>
          Sou formado em Técnico de Informática pelo IFF e atualmente estou me formando em Marketing pela UCAM. Sou uma pessoa curiosa que se interessa em entender o funcionamento das coisas e busca formas de simplificar e acelerar processos rotineiros. Possuo habilidades em raciocínio lógico e aprendo rapidamente coisas novas.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#a593f3] underline cursor-pointer'>
              Veja alguns dos meus últimos projetos.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl bg-[#1cff81] shadow-gray-900 rounded-full flex items-center justify-center p-4'>
          <Image src={AboutImg} className='rounded-full' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;