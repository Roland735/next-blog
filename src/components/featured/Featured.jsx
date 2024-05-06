import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Madzara here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            La Dolce Vita: Exploring the Charms of Italy
          </h1>
          <p className={styles.postDesc}>
            Italy, a country steeped in history, culture, and natural beauty,
            beckons travelers from around the globe with its irresistible
            allure. From the romantic canals of Venice to the ancient ruins of
            Rome, each corner of this enchanting land offers a unique tapestry
            of experiences waiting to be discovered. Join us on a journey
            through the heart of Italy as we uncover the secrets of la dolce
            vita—the sweet life that defines this captivating destination.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
