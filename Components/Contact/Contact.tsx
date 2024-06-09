import React from 'react'
import ContactData from './ContactData'
import ContactForm from './ContactForm'
import ContactADiv from './ContactADiv'

const Contact = () => {
  return (
    <div className='flex gap-5 justify-center items-start px-24 
    max-lg:px-10 max-xl:px-16 max-md:px-5 py-16 max-lg:flex-col relative overflow-hidden'>
      <ContactData/>
      <ContactForm/>
      <ContactADiv />
    </div>
  )
}

export default Contact
