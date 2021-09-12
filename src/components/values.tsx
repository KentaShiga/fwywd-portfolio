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
      <section className='flex flex-col mx-4 text-center' id='values'>
        <Title japanese='価値観' english='values'></Title>
        <div className='px-4 text-left bg-white'>
          {abouts.map((about, key) => (
            <div className='text-center' key={key}>
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
