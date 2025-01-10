import React from 'react';
import { CONST } from '../../constants';
import { getImageUrl } from '../../utils';
import styles from './Heroine.module.css';

const Heroine = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Nandini!</h1>
        <p className={styles.description}>{CONST.MY_DES}</p>
        <a
          href="/Resume.pdf"
          download="Nandini_Resume.pdf"
          className={styles.contactBtn}
        >
          Save My Resume
        </a>
      </div>
      <div className={styles.heroineImage}>
        <img
          src={getImageUrl('/images/heroineImage.png')}
          alt="Image of heroine"
        />
      </div>
    </section>
  );
};

export default Heroine;
