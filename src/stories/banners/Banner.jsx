import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';
import { Separator } from '../separator/Separator';

/**
 * Primary UI component for user interaction
 */
export const Banner = ({ backgroundColor, size, content, imageSection, imageUrl, ...props }) => {
  const mode = 'banner-size';
  return (
    <div style={backgroundColor && { backgroundColor }}
    className={['banner-size', `banner-size--${size}`, mode].join(' ')}
    {...props}
    >
      <div className='image-section'>
        <img src= {imageUrl&&imageUrl ? imageUrl : null} className="image" />
      </div>

      <Separator size='small' backgroundColor={'green'} />
      {content}
    </div>
  );
};

Banner.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the Banner be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  /**
   * Banner contents
   */
   content: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
};

Banner.defaultProps = {
  backgroundColor: 'white',
  // primary: false,
  size: 'medium',
};
