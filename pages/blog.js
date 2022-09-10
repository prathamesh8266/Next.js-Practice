import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Blog = ({ cont }) => {
  const [data, setData] = useState(cont);
  <Head>
    <title>Blog</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return (
    <div className={styles.blogs}>
      <div className={styles.blogItem}>
        {data.length == 0
          ? ""
          : data.map((a) => {
              return (
                <div key={a.slug}>
                  <Link href={`blogpost/${a.slug}?data=${a.content}`}>
                    <h3>{a.title}</h3>
                  </Link>
                  <p>{a.content.substr(0, 100) + "..."}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3000/api/blogs");
  const toJson = await data.json();

  return {
    props: { cont: toJson },
  };
}

export default Blog;
