import React from 'react';
import PropTypes from 'prop-types';
import '../styles/application.styl';

const Template = ({ children }) => (children());

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
