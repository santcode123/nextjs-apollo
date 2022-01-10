import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/blog/hello-world">
          <a>
            <h2 className={styles.back}>Hello World! &rarr;</h2>
          </a>
        </Link>
        <Link href="/blog/hello-world/stats">
          <a>
            <h2 className={styles.back}>Stats - Hello World! &rarr;</h2>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Blog;
