import type { NextPage } from 'next';

type titleProps = {
  japanese: string;
  english: string;
  position: string; // start or center or end
};

const Title: NextPage<titleProps> = (props) => {
  return (
    <div className={`lg:flex lg:flex-row lg:gap-2 ${props.position} m-4 lg:mx-0`}>
      <h3 className='text-xl lg:text-2xl font-bold tracking-widest text-black'>{props.japanese}</h3>
      <div className='lg:my-auto text-sm lg:text-base text-green uppercase'>{props.english}</div>
    </div>
  );
};

export default Title;
