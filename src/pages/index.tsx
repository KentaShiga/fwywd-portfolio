import type { NextPage } from 'next';
import About from 'components/about';
import Footer from 'components/common/footer';
import Header from 'components/common/header';
import Future from 'components/future';
import Hero from 'components/hero';
import Skills from 'components/skills';
import Values from 'components/values';

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>

      <main>
        <article>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Values></Values>
          <Future></Future>
        </article>
      </main>

      <Footer></Footer>
    </>
  );
};

export default Home;
