import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/images/contact.jpg';
import { buttons } from './Main';

const Contact = () => {

  const sendEmail = (e => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ptwinsd', e.target, 'RcD_dB2-94xJ045Fq')
      .then((result) => {
          console.log(result.text);
          alert("Mensagem enviada!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  });

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl font-bold tracking-widest uppercase text-[#1cff81]'>
          Contato
        </p>
        <h2 className='py-4'>Entre em contato</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-900 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>André Fernandes</h2>
                <p className='italic text-[#1cff81]'>Full-stack Developer</p>
                <p className='py-4'>
                  Disponível para trabalhos. Entre em contato para mais informações.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-[#1cff81]'>Meus links</p>
                <div className='flex items-center justify-between py-4'>
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

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nome</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-900'
                      type='text'
                      name='user_name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Telefone
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-900'
                      type='text'
                      name='user_phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900'
                    type='email'
                    name='user_email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-900'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='#'>
              <div className='rounded-full shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#1cff81]'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;