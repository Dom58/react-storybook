import React from 'react';
import PropTypes from 'prop-types';
import './separator';

export const Separator = ({ backgroundColor, size, content, imageSection, imageUrl, ...props }) => {
    const mode = 'separator';
    const color = color ? color : 'gray';

    return (
      <div style={[backgroundColor && { backgroundColor }, {color}]}
      className={['banner-size', `banner-size--${size}`, mode].join(' ')}
      {...props}
      >
      </div>
    );
  };
