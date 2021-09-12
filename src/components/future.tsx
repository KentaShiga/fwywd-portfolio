import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';

const abouts: DescriptionSet = {
  img_src: '/images/future.png',
  img_alt: 'future',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};

const About: NextPage = () => {
  return (
    <div className='md:object-scale-down pt-80 mx-auto -mt-72 bg-cover bg-future-sp'>
      <section className=' flex flex-col text-center' id='future'>
        <Title japanese='3年後にやりたいこと' english='future'></Title>
        <div className='text-center'>
          <p className='mx-4 mb-4 text-left'>{abouts.description}</p>
          <div className='object-bottom'>
            <Image
              src={abouts.img_src}
              alt={abouts.img_alt}
              width={480}
              height={251}
              objectFit='contain'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
