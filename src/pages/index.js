import React from 'react';
import Helmet from 'react-helmet';

import ShapeField from '../components/common/ShapeField';

const IndexPage = () => {
  const siteTitle = this.props.data.site.siteMetadata.title;
  const siteDescription = this.props.data.site.siteMetadata.description;
  const siteKeywords = this.props.data.site.siteMetadata.keywords;

  return (
    <div>
      <Helmet
        title={siteTitle}
        meta={[
          {
            'name': 'description',
            'content': siteDescription,
          },
          {
            'name': 'keywords',
            'content': siteKeywords,
          },
        ]}
      />
      <ShapeField />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
}
`
