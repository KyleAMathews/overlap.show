import React from 'react';

import styles from './About.styl';

import { EVENTBRITE_URL } from 'src/constants/urls';

const When = () => (
  <section className={styles.wrapper}>
    <h2 className={styles.title}>
      When
    </h2>
    <div className={styles.content}>
      <h3 className={styles.subtitle}>
        Private view
      </h3>
      <ol className={styles.openingHours}>
        <li>
          6pm-9pm Thursday <em className={styles.emphasis}>7 Sept</em>ember 2017
          <small className={styles.footnote}>
            Special performances are scheduled for the exhibition’s opening night
          </small>
        </li>
        <li>
          <a href={EVENTBRITE_URL} target='_blank' className={styles.eventbriteLink}>
            Register on Eventbrite
          </a>
        </li>
      </ol>
      <h3 className={styles.subtitle}>
        Public view
      </h3>
      <ol className={styles.openingHours}>
        <li>
          10am&ndash;7pm Friday 8 September 2017
        </li>
        <li>
          12noon&ndash;8pm Saturday 9 September 2017
        </li>
        <li>
          12noon&ndash;6pm Sunday 10 September 2017
        </li>
      </ol>
    </div>
  </section>
);

export default When;
