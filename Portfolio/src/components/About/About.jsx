import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faDisplay,
  faServer,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import skills from '../../data/skills.json';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutImage}>
          {skills.map((skill, id) => {
            return (
              <div>
                <div className={styles.aboutImageContainer}>
                  <img
                    key={id}
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div>
                <FontAwesomeIcon icon={faDisplay} className={styles.icon} />
                <h3>Frontend Developer</h3>
              </div>
              <p>
                I have extensive experience in web development, specializing in
                building scalable, responsive, and performance-optimized web
                applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div>
                <FontAwesomeIcon icon={faServer} className={styles.icon} />
                <h3>Backend Developer </h3>
              </div>

              <p>
                I build robust systems with Node.js, GraphQL, and RESTful APIs,
                optimizing performance and ensuring secure, scalable
                architectures.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                <h3>UI Designer</h3>
              </div>
              <p>
                I occasionally create user interfaces for personal projects,
                ensuring clean, intuitive, and responsive designs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className={styles.icon}
                />
                <h3>
                  Master's in Computer Science, Anglia Ruskin University
                  (2023-2024).
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
