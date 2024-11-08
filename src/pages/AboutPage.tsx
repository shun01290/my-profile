import React from 'react';
import { Helmet } from 'react-helmet';

const SkillProgress: React.FC<{ label: string; percentage: number }> = ({ label, percentage }) => {
  return (
    <li className='flex items-center gap-2'>
      <p className='w-32'>{label}</p>
      <div className='w-96 h-3 relative bg-gray-300 rounded-full'>
        <div
          className='h-3 bg-indigo-400 rounded-l-full'
          style={{ width: `${percentage}%` }}
        ></div>
        <span className='absolute right-2 bottom-3 text-sm'>{percentage}%</span>
      </div>
    </li>
  );
};


const Heading2: React.FC<{ word: string; }> = ({ word }) => {
  return (
    <h2 className='text-xl font-bold text-center text-indigo-400'>{word}</h2>
  )
}

const Heading3: React.FC<{ word: string; }> = ({ word }) => {
  return (
    <h3 className='mt-12 text-xl font-bold text-center'>{word}</h3>
  )
}

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet><title>About</title></Helmet>
      <main>
        <header className='text-center mt-8'>
          <h1 className='text-3xl font-bold'>My Skills</h1>
        </header>

        <section className='w-full px-10 pt-8 pb-12 mt-8 bg-white rounded-md shadow-md'>
          <Heading2 word='Design Skills' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='UX Design' percentage={65} />
            <SkillProgress label='UI Design' percentage={75} />
          </ul>
          <ul className='flex gap-10 mt-6'>
            <SkillProgress label='Visual Design' percentage={60} />
            <SkillProgress label='Business Design' percentage={45} />
          </ul>
          <ul className='flex gap-10 mt-6'>
            <SkillProgress label='Web Design' percentage={80} />
            <SkillProgress label='Motion Design' percentage={60} />
          </ul>
          <ul className='flex gap-10 mt-6'>
            <SkillProgress label='Product Design' percentage={60} />
          </ul>
        </section>

        <section className='w-full px-10 pt-8 pb-12 mt-8 bg-white rounded-md shadow-md'>
          <Heading2 word='Technical Skills' />
          <Heading3 word='Programming Languages' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='JavaScript' percentage={70} />
            <SkillProgress label='TypeScript' percentage={10} />
          </ul>
          <ul className='flex gap-10 mt-6'>
            <SkillProgress label='Java' percentage={0} />
            <SkillProgress label='Python' percentage={35} />
          </ul>

          <Heading3 word='Web Development' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='HTML / CSS' percentage={90} />
            <SkillProgress label='React' percentage={80} />
          </ul>
          <ul className='flex gap-10 mt-6'>
            <SkillProgress label='Next.js' percentage={50} />
            <SkillProgress label='Bootstrap' percentage={85} />
          </ul>
          <ul className='flex gap-10 mt-6'>
            <SkillProgress label='Tailwind CSS' percentage={85} />
          </ul>

          <Heading3 word='Backend Development' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='Node.js' percentage={10} />
            <SkillProgress label='PHP / Laravel' percentage={30} />
          </ul>

          <Heading3 word='Database Management' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='MySQL' percentage={40} />
          </ul>

          <Heading3 word='Cloud Technologies' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='AWS' percentage={5} />
            <SkillProgress label='GCP' percentage={20} />
          </ul>
          <ul className='flex gap-10 mt-6'>
            <SkillProgress label='Docker' percentage={5} />
          </ul>

          <Heading3 word='Version Control' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='Git' percentage={65} />
            <SkillProgress label='GitHub' percentage={55} />
          </ul>

          <Heading3 word='UX/UI Tools' />
          <ul className='flex gap-10 mt-10'>
            <SkillProgress label='Figma' percentage={90} />
            <SkillProgress label='Adobe XD' percentage={90} />
          </ul>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
