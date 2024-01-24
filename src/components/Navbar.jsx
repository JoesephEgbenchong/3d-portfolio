import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets';



export default function Navbar() {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex top-0 z-20 items-center py-5 fixed bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {setActive(''); window.scrollTo(0,0);}}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] cursor-pointer font-bold flex'>Joseph &nbsp; <span className='sm:block hidden'>| Web Mastery</span></p>
        </Link>
        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
             key={link.id}
             className={`${active === link.title ? "text-red-500" : "text-secondary"} hover:text-white cursor-pointer text-[18px] font-medium`}
             onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/**Right side nav bar for mobile and small devices. */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={!toggle ? menu : close} alt='menu' 
          className='w-[28px] h-[28px] object-contain cursor-pointer' 
          onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none sm:flex flex-col justify-end items-start'>
              {navLinks.map((link, index) => (
                <li
                key={link.id}
                className={`${active === link.title ? "text-red-500" : "text-secondary"} ${index !== navLinks.length-1 ? "mb-4" : "mb-0"} 
                font-poppins cursor-pointer text-[16px] font-medium`}
                onClick={() => {setToggle(!toggle); setActive(link.title)}}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
                ))}
            </ul>
          </div>
        </div>
        {/**End of right side Nav bar for mobile and small devices */}
      </div>
    </nav>
  )
}
