import React from 'react';
import { Helmet } from 'react-helmet';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet><title>Contact</title></Helmet>
      <section className='w-[800px] bg-white shadow-md'>
        <div className='py-8 px-4 mx-auto max-w-screen-md'>
          <h2 className='mb-4 text-2xl tracking-tight font-bold text-center'>お問い合わせ</h2>
          <form action='#' className='flex flex-col items-center space-y-8'>
            <div className='w-full'>
              <label className='block mb-2 text-sm font-medium after:content-["*"] after:text-red-500'>メールアドレス</label>
              <input type='email' id='email' className='shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring focus:ring-indigo-300' placeholder='sample@email.com' required />
            </div>
            <div className='w-full'>
              <label className='block mb-2 text-sm font-medium'>お問い合わせ内容</label>
              <textarea id='message' rows={6} className='block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300' placeholder=''></textarea>
            </div>
            <button className='w-fit bg-indigo-400 text-white font-bold rounded-md px-8 py-1'>送信</button>
          </form>
        </div>
      </section>
    </>
  )
};

export default ContactPage;
