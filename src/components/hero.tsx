import type { NextPage } from 'next';
import Image from 'next/image';

const mainTitle: string = 'メインタイトル';
const subTitle: string = 'サブタイトル';
const HeroImgSrc: string = '/images/hero.png';

const Hero: NextPage = () => {
  return (
    <div className='m-auto'>
      <section className='flex flex-col py-4 bg-header'>
        <div className='m-auto mt-2 mb-4 text-center text-white'>
          <h1 className='py-2 text-4xl font-bold tracking-wider'>{mainTitle}</h1>
          <h2 className='text-xl tracking-wide'>{subTitle}</h2>
        </div>
        <div className='my-4 text-center'>
          <Image src={HeroImgSrc} alt='hero' width={240} height={180} objectFit='contain' />
        </div>
      </section>
    </div>
  );
};

export default Hero;
