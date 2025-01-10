import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Contact.module.css';
import { CONST } from '../../constants';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let's Connect</h2>
        <p>
          I'm always open to new opportunities. Reach out to me via the contact
          options below!
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href={CONST.LINKEDIN} className={styles.link} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className={styles.link}>
          <a href={`mailto:${CONST.MY_EMAIL}`} className={styles.link}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </a>
        </li>
        <li className={styles.link}>
          <a href={CONST.GITHUB} className={styles.link} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
