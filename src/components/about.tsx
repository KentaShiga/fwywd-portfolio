import type { NextPage } from 'next';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';
import about_1_img from '~/public/images/about-1.png';
import about_2_img from '~/public/images/about-2.png';
import about_3_img from '~/public/images/about-3.png';

const abouts: DescriptionSet[] = [
  {
    img_src: about_1_img,
    img_alt: 'about-1',
    title: '趣味',
    description:
      '学生の頃からずっとテニスをしています。コロナで人と会えない時でも壁打ちテニス場で黙々とボールを打ち続けていました。またボードゲームも最近ハマっていてカタンを友達とずっと遊んでいます。',
  },
  {
    img_src: about_2_img,
    img_alt: 'about-2',
    title: '好きな食べ物',
    description:
      'ラーメンやハンバーグが好きです。休日によくミシュランガイドを片手に都内の人気店巡りをしています。また、たまに贅沢して友達と焼肉や寿司などの高級な店に行き、料理の美味しさを一緒に体験することを大切にしています。',
  },
  {
    img_src: about_3_img,
    img_alt: 'about-3',
    title: '性格',
    description:
      'おとなしく穏やかな性格です。人の話をよく聴くことが長所だと言われることが多いです。他人に対しては謙虚な姿勢でいることが多いですが、競争となると負けず嫌いの一面を見せることがあります。',
  },
];

const About: NextPage = () => {
  return (
    <div className='mx-auto'>
      <section
        className=' lg:flex flex-col lg:pt-8 lg:pb-16 mx-12 lg:mx-0 lg:-mb-16 text-center lg:bg-cover lg:bg-about'
        id='about'
        style={{ backgroundSize: '100% 80vh' }}
      >
        <div className='lg:mx-auto lg:max-w-screen-lg'>
          <Title japanese='私について' english='about' position='center'></Title>
          <div className='lg:flex lg:flex-row lg:gap-12 text-left'>
            {abouts.map((about, key) => (
              <div className=' lg:w-full text-center' key={key}>
                <Image
                  src={about.img_src}
                  alt={about.img_alt}
                  width={240}
                  height={180}
                  objectFit='contain'
                />
                <h3 className='m-2 text-xl font-bold tracking-widest text-green'>{about.title}</h3>
                <p className='text-left'>{about.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
