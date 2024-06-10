import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from './../../public/images/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#404040');
  const [linkColor, setLinkColor] = useState('#fff');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl shadow-gray-900 z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='#'>
            <Image
              src={NavLogo}
              alt='Dre.dev'
              width='125'
              height='50'
              className='cursor-pointer'
            />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#about'>Sobre</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#skills'>Habilidades</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#projects'>Projetos</Link>
            </li>
            <li className='ml-10 text-sm uppercase mr-4 hover:border-b'>
              <Link href='#contact'>Contato</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden mr-2'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 overflow-y-auto w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#404040] p-10 ease-in duration-500'
              : 'fixed left-[-120%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Vamos construir algo incrível juntos
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='#'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Sobre
                </li>
              </Link>
              <Link href='#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Habilidades
                </li>
              </Link>
              <Link href='#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projetos
                </li>
              </Link>
              <Link href='#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contato
                </li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#1cff81]'>
                Minhas redes
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/andrefersouza/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/dredeco'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='https://facebook.com/dredeco' target='_blank'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <FaFacebookF />
                  </div>
                </Link>
                <Link href='https://instagram.com/dredeco.dev' target='_blank'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <FaInstagram />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;