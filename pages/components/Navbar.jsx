import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from './../../public/images/logo.png'
import { buttons } from './Main';

const links = [
  {name: "Home", section: "#"},
  {name: "Sobre", section: "#about"},
  {name: "Habilidades", section: "#skills"},
  {name: "Projetos", section: "#projects"},
  {name: "Contato", section: "#contact"},
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

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
      className={
        shadow
          ? 'fixed w-full h-20 bg-[#404040] shadow-xl shadow-gray-900 z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 bg-[#404040] z-[100]'
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
          <ul className='hidden md:flex gap-4'>
            {links.map((link) => (
              <li className='text-sm mr-2 hover:font-bold hover:text-[#1cff81]'>
                <Link href={link.section}>{link.name}</Link>
              </li>
            ))}
          </ul>
          {/* Hamburger Icon */}
          <div
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
            <div className='border-b border-gray-300 my-4' />
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {links.map((link) => (
                <Link href={link.section}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#1cff81]'>
                Minhas redes
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                {buttons.map((button) => (
                  <Link
                    href={button.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      {button.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;