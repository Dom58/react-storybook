import React from 'react';
import PropTypes from 'prop-types';
import './separator.css';

export const Separator = ({ backgroundColor, size }) => {
    const mode = 'separator';
    // const color = color ? color : 'gray';

    return (
      <div 
        style={backgroundColor && { backgroundColor }}
        className={['separator', `separator-size--${size}`, mode].join(' ')}
      >
      </div>
    );
};

Separator.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the Separator be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'huge'])
  /**
   * Optional click handler
   */
};

Separator.defaultProps = {
  backgroundColor: 'gray',
  // primary: false,
  size: 'small',
};
