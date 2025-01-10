import React from 'react';
import styles from './Experience.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import experience from '../../data/experience.json';
import { getImageUrl } from '../../utils';
import { useMediaQuery } from 'react-responsive';

const Experience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      {!isMobile ? (
        <Carousel
          autoPlay
          infiniteLoop
          showIndicators={false}
          showThumbs={false} // Hide thumbnails
          showStatus={false} // Hide status
          dynamicHeight={true} // Dynamic height based on content
          className={styles.experienceContainer}
        >
          {experience.map((exp, id) => {
            return (
              <div key={id} className={styles.exp}>
                <img
                  src={getImageUrl(exp.imageSrc)}
                  alt={`${exp.organisation} Logo`}
                />
                <div className={styles.expDetails}>
                  <div className={styles.expTitle}>
                    <h3>{`${exp.role} | ${exp.organisation}`}</h3>
                    <p>{`${exp.startDate} - ${exp.endDate}`}</p>
                  </div>

                  <div className={styles.innerExp}>
                    <div className={styles.clientExp}>
                      <img
                        src={getImageUrl(exp?.experiences?.img)}
                        alt={`${exp?.experiences?.title} Logo`}
                        className={styles.innerImg}
                      />
                      <p>{exp?.experiences?.title}</p>
                    </div>
                    <div className={styles.innerDesc}>
                      <ul>
                        {exp?.experiences?.description?.map(
                          (experience, id) => {
                            return <li key={id}>{experience}</li>;
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div className={styles.experienceContainer}>
          {experience.map((exp, id) => {
            return (
              <div key={id} className={styles.exp}>
                <img
                  src={getImageUrl(exp.imageSrc)}
                  alt={`${exp.organisation} Logo`}
                />
                <div className={styles.expDetails}>
                  <div className={styles.expTitle}>
                    <h3>{`${exp.role} | ${exp.organisation}`}</h3>
                    <p>{`${exp.startDate} - ${exp.endDate}`}</p>
                  </div>

                  <div className={styles.innerExp}>
                    <div className={styles.clientExp}>
                      <img
                        src={getImageUrl(exp?.experiences?.img)}
                        alt={`${exp?.experiences?.title} Logo`}
                        className={styles.innerImg}
                      />
                      <p>{exp?.experiences?.title}</p>
                    </div>
                    <div className={styles.innerDesc}>
                      <ul>
                        {exp?.experiences?.description?.map(
                          (experience, id) => {
                            return <li key={id}>{experience}</li>;
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Experience;
