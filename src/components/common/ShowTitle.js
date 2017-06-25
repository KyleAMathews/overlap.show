import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ShowTitle.styl';

const ShowTitle = () => {
  const siteTitle = this.props.data.site.siteMetadata.title;

  return (
    <h1 className={styles.title}>
      {siteTitle}
    </h1>
  );
};

export default ShowTitle;

export const pageQuery = graphql`
query TitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
