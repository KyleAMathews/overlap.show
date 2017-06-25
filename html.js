import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const BUILD_TIME = new Date().getTime();

const HTML = (props) => {
  const head = Helmet.rewind();

  // include link to the css file if we are running in production mode
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <link rel="stylesheet" href={prefixLink(`/styles.css?t=${BUILD_TIME}`)} />;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {this.props.headComponents}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
        {this.props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
