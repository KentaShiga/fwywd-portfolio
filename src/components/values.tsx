import type { NextPage } from 'next';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';

const abouts: DescriptionSet[] = [
  {
    img_src: '/images/value1.png',
    img_alt: 'value-1',
    title: '価値観01',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    img_src: '/images/value2.png',
    img_alt: 'value-2',
    title: '価値観02',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    img_src: '/images/value3.png',
    img_alt: 'value-3',
    title: '価値観03',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
];

const Values: NextPage = () => {
  return (
    <div className='mx-auto'>
      <section className='flex flex-col mx-4 lg:mx-auto lg:max-w-screen-lg text-center' id='values'>
        <Title japanese='価値観' english='values' position='center'></Title>
        <div className='lg:flex lg:flex-row lg:py-8 px-4 text-left bg-white lg:divide-x-2 divide-border-greenlight'>
          {abouts.map((about, key) => (
            <div className='lg:px-8 text-center' key={key}>
              <Image
                src={about.img_src}
                alt={about.img_alt}
                width={240}
                height={180}
                objectFit='contain'
              />
              <h3 className='my-2 text-lg font-bold tracking-wider'>{about.title}</h3>
              <p className='my-2 text-left'>{about.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Values;
