import type { NextPage } from 'next';
import Image from 'next/image';
import hero_img from '~/public/images/hero.png';

const mainTitle: string = 'Kenta Shiga';
const subTitle: string = 'DevOps Engineer';

const Hero: NextPage = () => {
  return (
    <div className='m-auto'>
      <section className=' py-4 bg-header'>
        <div className='flex flex-col lg:flex-row mx-auto max-w-screen-lg'>
          <div className='lg:m-auto'>
            <div className='m-auto lg:my-auto mt-2 mb-4 text-center lg:text-left text-white'>
              <h1 className='py-2 text-4xl font-bold tracking-wider'>{mainTitle}</h1>
              <h2 className='text-xl tracking-wide'>{subTitle}</h2>
            </div>
          </div>
          <div className='relative my-4 lg:w-1/2 h-48 lg:h-80 text-center'>
            <Image src={hero_img} alt='hero' objectFit='contain' layout='fill' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
