import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          .h2 {
            font-size: 38px;
          }
          .h3 {
            font-size: 28px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>

        <div className={styles.coderImgHolder}>
          <Image
            className={styles.coderImg}
            src="/coder.jpg"
            height={416}
            width={624}
            alt="coder"
          />
        </div>

        <p className={styles.description}>
          A blog for hunting coders by hunting coder
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
