import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import AboutImg from '../../public/images/userq1.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase font-bold text-xl tracking-widest text-[#1cff81]'>
            Sobre
          </p>
          <h2 className='py-4'>André Fernandes</h2>
          <p className='py-2 text-gray-300'>
          Atualmente, meu foco é na criação de sites responsivos, tanto estáticos quanto utilizando APIs. Tenho interesse em aprender novas tecnologias e aplicá-las em meus projetos. Acredito que no desenvolvimento de projetos, é importante usar as melhores ferramentas disponíveis.
          </p>
          <p className='py-2 text-gray-300'>
          Sou formado em <strong>Técnico de Informática pelo Instituto Federal Fluminense</strong> e atualmente estou cursando <strong>Análise e Desenvolvimento de Sistemas pela Estácio</strong>. Sou uma pessoa curiosa que se interessa em entender o funcionamento das coisas e busca formas de simplificar e acelerar processos rotineiros. Possuo habilidades em raciocínio lógico e aprendo rapidamente coisas novas.
          </p>
          <Link href='/#projects'>
            <p className='py-2 font-bold text-[#a593f3] underline cursor-pointer'>
              Veja alguns dos meus últimos projetos.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl bg-[#1cff81] shadow-gray-900 rounded-full flex items-center justify-center p-2'>
          <Image src={AboutImg} className='rounded-full' layout='intrinsic' objectFit='cover' objectPosition='top' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;