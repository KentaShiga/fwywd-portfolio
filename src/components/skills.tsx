import type { NextPage } from 'next';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';
import skill_img from '~/public/images/skill.png';

const aboutSet: DescriptionSet = {
  img_src: skill_img,
  img_alt: 'skill',
  description:
    'SIerでのJavaアプリケーションの作成経験とDevOpsエンジニアとしてのスキルが自分の柱になっています。新しい技術に対する知的好奇心が高いため、Dockerなど所属チームで扱っていなかった技術であっても積極的に試してきました。また専門外の分野であっても他人のヘルプに入ることが多くよく問題を解決してきたので、トラブルシューティングに長けているとよく言われます。',
};

type skillSet = {
  name: string;
  progress: number;
};

const skills: skillSet[] = [
  { name: 'DevOps', progress: 70 },
  { name: 'Java', progress: 60 },
  { name: 'Python', progress: 50 },
  { name: 'React', progress: 10 },
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
    <div
      className='pt-8 pb-16 mx-auto mt-8 bg-skills-sp lg:bg-skills'
      style={{ backgroundSize: '100% 100%' }}
    >
      <section
        className=' flex flex-col mx-4 lg:mx-auto lg:max-w-screen-lg text-center'
        id='skills'
      >
        <div className='lg:ml-auto lg:w-1/2'>
          <Title japanese='スキル' english='skills' position='lg:justify-start'></Title>
        </div>

        <div className='lg:flex lg:flex-row'>
          <div className='m-auto lg:w-1/2'>
            <Image
              src={aboutSet.img_src}
              alt={aboutSet.img_alt}
              width={320}
              height={240}
              objectFit='contain'
            />
          </div>
          <div className='lg:w-1/2'>
            <p className='pb-4 text-left'>{aboutSet.description}</p>
            <div className='pt-4 pb-8 bg-white'>{ProgressBar}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
