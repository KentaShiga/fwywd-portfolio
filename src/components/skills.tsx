import type { NextPage } from 'next';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';

const aboutSet: DescriptionSet = {
  img_src: '/images/skill.png',
  img_alt: 'about-1',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};

type skillSet = {
  name: string;
  progress: number;
};

const skills: skillSet[] = [
  { name: 'Skills', progress: 30 },
  { name: 'Skills', progress: 40 },
  { name: 'Skills', progress: 50 },
  { name: 'Skills', progress: 60 },
];

const ProgressBar = skills.map((skill, key) => (
  <div className='pt-1 mx-4' key={key}>
    <div className='flex justify-between items-center'>
      <div>
        <span className='inline-block font-semibold text-green rounded-full'>{skill.name}</span>
      </div>
    </div>
    <div className='flex flex-row'>
      <div className='flex overflow-hidden flex-auto my-auto h-4 text-xs bg-progress-light rounded'>
        <div
          style={{ width: skill.progress + '%' }}
          className='flex flex-col justify-center w-1/3 text-center text-white whitespace-nowrap bg-progress-dark shadow-none'
        ></div>
      </div>
      <div className='mx-4 w-4 text-center'>
        <span className='inline-block text-sm font-semibold text-green'>{skill.progress}%</span>
      </div>
    </div>
  </div>
));

const About: NextPage = () => {
  return (
    <div className='pt-8 pb-16 mx-auto mt-8 bg-skills-sp' style={{ backgroundSize: '100% 100%' }}>
      <section className=' flex flex-col mx-4 text-center' id='skills'>
        <Title japanese='スキル' english='skills'></Title>
        <div className='text-center'>
          <Image
            src={aboutSet.img_src}
            alt={aboutSet.img_alt}
            width={320}
            height={240}
            objectFit='contain'
          />
          <p className='pb-4 text-left'>{aboutSet.description}</p>
        </div>
        <div className='pt-4 pb-8 bg-white'>{ProgressBar}</div>
      </section>
    </div>
  );
};

export default About;
