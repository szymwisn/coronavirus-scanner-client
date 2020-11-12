import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ src, alt, size }) => (
  <img src={src} alt={alt} width={size} height={size} />
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Icon;
