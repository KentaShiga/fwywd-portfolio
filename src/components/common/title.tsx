import type { NextPage } from 'next';

type titleProps = {
  japanese: string;
  english: string;
};

const Title: NextPage<titleProps> = (props) => {
  return (
    <div className='m-4'>
      <h3 className='text-xl font-bold tracking-widest text-black'>{props.japanese}</h3>
      <div className='text-sm text-green uppercase'>{props.english}</div>
    </div>
  );
};

export default Title;
