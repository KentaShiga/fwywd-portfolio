import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const headerLinks: string[] = ['about', 'skills', 'values', 'future'];
const logo_img = '/images/logo.png';

const Header: NextPage = () => {
  return (
    <div className='mx-auto'>
      <header className='flex flex-col lg:flex-row'>
        <Link href='/'>
          <a className='m-auto -mt-2 -mb-4 lg:ml-0'>
            <Image src={logo_img} alt='logo' width={180} height={80} objectFit='contain' />
          </a>
        </Link>

        <nav className='lg:justify-around lg:m-auto lg:mr-0'>
          <ul className=' flex justify-around px-3'>
            {headerLinks.map((header) => (
              <li className='pb-3 lg:pb-0 lg:mx-4 font-bold text-green uppercase' key={header}>
                <Link href={`#${header}`}>
                  <a>{header}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
