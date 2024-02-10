import React from 'react'

import { SectionWrapper } from '../hoc'

function Donations() {
  return (
    <div className=''>
        <a href="https://www.buymeacoffee.com/egbenchongII">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy 
            me a coffee&emoji=&slug=egbenchongII&button_colour=FFDD00&
            font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
        </a>
    </div>
  )
}

export default SectionWrapper(Donations, "");
