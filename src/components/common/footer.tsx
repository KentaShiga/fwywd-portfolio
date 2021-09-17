import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import facebook_img from '~/public/images/facebook.png';
import twitter_img from '~/public/images/twitter.png';

const auhtor: string = '名前 太郎';
const copyRight: string = '2021 KIKAGAKU';

type LinkSet = {
  title: string;
  url: string;
};

const footerLinks: LinkSet[] = [
  { title: 'お問い合わせ', url: '/' },
  { title: '助成金について', url: '/' },
  { title: '特定商取引法に基づく表記', url: '/' },
  { title: 'プライバシーポリシー', url: '/' },
];

const snsIconSize: number = 20;

const Footer: NextPage = () => {
  return (
    <div>
      <footer>
        <div className='flex flex-col text-sm text-center text-white bg-footer'>
          <address className='hidden lg:block p-3 m-3'>
            <span className='m-2'>CREATED BY</span>
            <span className='m-2 text-lg font-bold' id='name'>
              {auhtor}
            </span>
          </address>
          <nav className='lg:hidden'>
            <ul className='flex flex-wrap p-3'>
              {footerLinks.map((link, key) => (
                <li key={key} className='p-2 w-2/4'>
                  <Link href={link.url}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div>
            <Link href='/'>
              <a>
                <Image
                  className=''
                  src='/images/logo_white.png'
                  alt='logo'
                  width={120}
                  height={120}
                  objectFit='contain'
                />
              </a>
            </Link>
          </div>
          <div className='m-3'>
            <Link href='https://twitter.com'>
              <a className='m-3'>
                <Image
                  src={twitter_img}
                  alt='Twitter Link'
                  width={snsIconSize}
                  height={snsIconSize}
                  objectFit='contain'
                />
              </a>
            </Link>
            <Link href='https://www.facebook.com'>
              <a className='m-3'>
                <Image
                  src={facebook_img}
                  alt='Facebook Link'
                  width={snsIconSize}
                  height={snsIconSize}
                  objectFit='contain'
                />
              </a>
            </Link>
          </div>
          <small className='mt-2 mb-8'>&copy; {copyRight}</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
