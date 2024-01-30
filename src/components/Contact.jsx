import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'

import { styles } from '../styles'

import {FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { FaXTwitter} from "react-icons/fa6"

///template_jdd3tnf
//service_4l7hdf3
//AbUg960zPr81cA-jM

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_4l7hdf3',
      'template_jdd3tnf',
      {
        from_name: form.name,
        to_name: 'Joseph',
        from_email: form.email,
        to_email: 'egbenchongjosephayuk@gmail.com',
        message: form.message,
      },
      'AbUg960zPr81cA-jM'
    ).then(() => {
      setLoading(false);
      alert("Thank You! I will get back to you ASAP");

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);

      console.log(error);

      alert('SOmething went wrong.')
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none outline-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none outline-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none outline-none font-medium'
            />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mb-3 md:mb-6'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        <div className='flex flex-row mb-6 items-center justify-between'>
          <div className='md:w-[40%] w-[30%] border-[1px] border-secondary h-0'></div>
          <p className='text-xs font-light'>Or Reach Out</p>
          <div className='md:w-[40%] w-[30%] border-[1px] border-secondary h-0'></div>
        </div>
        

        <div className='flex flex-wrap gap-6 items-center justify-center'>
          <FaWhatsapp className={`${styles.socialMedia}`} onClick={() => window.open("https://wa.me/237670393007",'_blank')} />
          <FaLinkedin className={`${styles.socialMedia}`} onClick={() => window.open("https://www.linkedin.com/in/joseph-ayuk-egbenchong-ii-717a6a116/",'_blank')} />
          <FaXTwitter className={`${styles.socialMedia}`} onClick={() => window.open("https://twitter.com/JosephAyu2",'_blank')}/>
        </div>

      </motion.div>

      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'
        >
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
