import 'tailwindcss/tailwind.css';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const title: string = 'My Portfolio';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='fwywd社の採用試験である一次試験のポートフォリオ制作をNext.js + Typescript + Tailwind CSSを利用して挑戦しました'
        />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicons.png' type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
