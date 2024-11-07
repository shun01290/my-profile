import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Skeleton } from '@mui/material';
import { useGitHubProfile } from '../App';

const HomePage: React.FC = () => {
  const profile = useGitHubProfile();

  if (!profile) {
    return (
      <section className='flex flex-col items-center'>
        <Skeleton variant='circular' width={250} height={250} animation='wave' />
        <Skeleton variant='text' width={100} sx={{ fontSize: '1.125rem', marginTop: '1rem' }} animation='wave' />
        <Skeleton variant='text' width={250} sx={{ fontSize: '1.25rem' }} animation='wave' />
        <Skeleton variant='text' width={800} height={80} sx={{ marginTop: '2rem' }} animation='wave' />
        <Skeleton variant='text' width={100} height={60} sx={{ marginTop: '1rem' }} animation='wave' />
      </section>

    )
  }

  return (
    <section className='flex flex-col items-center'>
      <img className='w-[250px] border-[12px] border-white rounded-full shadow-lg' src={profile.avatar_url} alt='' />
      <h2 className='mt-4 text-lg font-bold'>{profile.login}</h2>
      <h2 className='text-xl font-bold'>フロントエンドエンジニア</h2>
      <p className='mt-8 text-base'>UI/UXを意識したデザインを学びながら、セマンティックマークアップを取り入れたサイト制作をジャンルを問わず行っています。<br />また、Pythonを使ってルーチンワークの自動化もしています。</p>
      <a href='https://github.com/shun01290' target='_blank' rel='noopener noreferrer' className='w-fit inline-flex mt-4 px-2 py-1 bg-neutral-700 text-white shadow-md hover:bg-neutral-600'><GitHubIcon className='mr-1' />Github</a>
    </section>
  )
};

export default HomePage;
