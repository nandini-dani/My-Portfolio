import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const ProjectCard = ({
  proj: { title, description, imageSrc, skills, source },
}) => {
  return (
    <div className={styles.parentcontainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        </div>
        <div>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className={styles.links}>
            <a href={source} className={styles.link}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
