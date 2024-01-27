import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'

import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => {
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full'>
      <p className='font-black text-white text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@ </span>{name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img src={image} alt={`Image of -${name}`}  className='w-10 h-10 rounded-full object-contain'/>
        </div>
      </div>
      
    </motion.div>
  )
}

function Feedbacks() {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div textVariant={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What Others Say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} flex flex-wrap -mt-20 pb-14 gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");