import React from 'react';

import styles from './Footer.styl';

import { TWITTER_URL, INSTAGRAM_URL, FACEBOOK_URL } from 'src/constants/urls';
import TwitterIcon from 'src/components/common/icons/TwitterIcon';
import InstagramIcon from 'src/components/common/icons/InstagramIcon';
import FacebookIcon from 'src/components/common/icons/FacebookIcon';

const Footer = () => (
  <div className={styles.footer}>
    <ul className={styles.socialList}>
      <li className={styles.social}>
        <a href={TWITTER_URL} className={styles.socialLink}>
          <TwitterIcon className={styles.socialIcon} />
        </a>
      </li>
      <li className={styles.social}>
        <a href={INSTAGRAM_URL} className={styles.socialLink}>
          <InstagramIcon className={styles.socialIcon} />
        </a>
      </li>
      <li className={styles.social}>
        <a href={FACEBOOK_URL} className={styles.socialLink}>
          <FacebookIcon className={styles.socialIcon} />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
