import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MainLayout from '../layout/MainLayout';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainLayout>
      <div className='mt-32 mb-6'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='bg-black p-6 rounded-md max-w-md mx-auto'
        >
          <label className='text-white'>Name</label>
          <input
            type='text'
            placeholder='Type your name'
            name='user_name'
            className='w-full px-4 py-2 rounded-md bg-gray-800 text-white mb-4'
          />

          <label className='text-white'>Email</label>
          <input
            type='email'
            placeholder='Type your Email'
            name='user_email'
            className='w-full px-4 py-2 rounded-md bg-gray-800 text-white mb-4'
          />

          <label className='text-white'>Message</label>
          <textarea
            name='message'
            placeholder='Type Here'
            className='w-full px-4 py-2 rounded-md bg-gray-800 text-white mb-4'
          ></textarea>

          <input
            type='submit'
            value='Send'
            className='w-full px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 cursor-pointer'
          />
        </form>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
