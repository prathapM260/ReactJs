import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,Iam Prathap</h1>
            <p className={styles.description}>Iam a fornt-enddeveloper.
            Have been doing the first react project on react,
            very soon i will become a react developer.
           its very interesting to do code in react,
           because every time you code instant results will be appearing in the browser.

              
              </p>
              <a href="mailto:myemail@gamil.com" className={styles.contactBtn}>Contact Me </a>

        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero image not visible"className={styles.heroImg}/>
        <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  )
}
export default Hero;
