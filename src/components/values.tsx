import type { NextPage } from 'next';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';
import value1_img from '~/public/images/value1.png';
import value2_img from '~/public/images/value2.png';
import value3_img from '~/public/images/value3.png';

const abouts: DescriptionSet[] = [
  {
    img_src: value1_img,
    img_alt: 'value-1',
    title: '知識・知的好奇心',
    description:
      '新たな知識を得ることをとても楽しんでいます。YouTubeや書店で自分の知らない知識を学ぶことが楽しく、いつもワクワクしながら活用しています。仕事面では、今後トレンドとなりそうな技術を幅広く取り入れていきたいと考えています。',
  },
  {
    img_src: value2_img,
    img_alt: 'value-2',
    title: '身近な人の役に立つ',
    description:
      '自分の周りの人に対する貢献を重視しています。世界中や日本中に対して価値を生み出すといった大きな枠組みではなく自分の力が役立てる範囲に注力することで世の中に貢献したいと考えています。',
  },
  {
    img_src: value3_img,
    img_alt: 'value-3',
    title: '努力・成長',
    description:
      '興味がある分野は時間をかけて取り組めば上位層に入れると自分を信じています。過去の大会や試験での様々な失敗や成功経験により、どんな出発点からでも努力次第でいくらでも成長できるというマインドを持っています。',
  },
];

const Values: NextPage = () => {
  return (
    <div className='mx-auto'>
      <section className='flex flex-col mx-4 lg:mx-auto lg:max-w-screen-lg text-center' id='values'>
        <Title japanese='価値観' english='values' position='lg:justify-center'></Title>
        <div className='lg:flex lg:flex-row lg:py-8 px-4 text-left bg-white lg:divide-x-2 divide-border-greenlight'>
          {abouts.map((about, key) => (
            <div className='lg:px-8 lg:w-full text-center' key={key}>
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
