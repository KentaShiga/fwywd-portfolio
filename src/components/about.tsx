import type { NextPage } from 'next';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';

const abouts: DescriptionSet[] = [
  {
    img_src: '/images/about-1.png',
    img_alt: 'about-1',
    title: '趣味',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    img_src: '/images/about-2.png',
    img_alt: 'about-2',
    title: '好きな食べ物',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    img_src: '/images/about-3.png',
    img_alt: 'about-3',
    title: '性格',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
];

const About: NextPage = () => {
  return (
    <div className='mx-auto'>
      <section className='flex flex-col mx-12 text-center xl:bg-about' id='about'>
        <Title japanese='私について' english='about'></Title>
        <div className='text-left'>
          {abouts.map((about, key) => (
            <div className='text-center' key={key}>
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
      </section>
    </div>
  );
};

export default About;
