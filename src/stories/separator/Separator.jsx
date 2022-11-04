import React from 'react';
import PropTypes from 'prop-types';
import './separator';

export const Separator = ({ backgroundColor, size, ...props }) => {
    const mode = 'separator';
    const color = color ? color : 'gray';

    return (
      <div style={[backgroundColor && { backgroundColor }, {color}]}
      className={['separator', `separator-size--${size}`, mode].join(' ')}
      {...props}
      >
      </div>
    );
  };
