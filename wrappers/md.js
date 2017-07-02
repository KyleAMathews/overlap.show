import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { config } from 'config';
import StaticTitle from 'src/components/common/PageTitle/StaticTitle';
import Artist from 'src/components/Artist';

const Markdown = ({ route }) => {
  const page = route.page.data;
  const description = page.description || '';
  const keywords = page.keywords || '';
  const meta = [
    {'name': 'description', 'content': description},
    {'name': 'keywords', 'content': keywords },
  ];

  return (
    <div className='markdown'>
      <Helmet
        title={`${config.siteTitle} | ${page.title}`}
        meta={meta}
      />

      <StaticTitle />

      <Artist page={route.page} />
    </div>
  );
};

Markdown.propTypes = {
  route: PropTypes.object,
};

export default Markdown;
