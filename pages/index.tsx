import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="My personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </nav>
        <div className={styles.main_wrapper}>

        </div>
      </main>
    </div>
  );
};

export default Home;
