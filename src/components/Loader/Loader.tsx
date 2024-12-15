import React from 'react';
import { LoaderProps } from './types';
import './styles.css';

export const Loader: React.FC<LoaderProps> = ({
  size = 40,
  color = '#3b82f6',
  message,
  className = '',
}) => {
  const loaderStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `3px solid ${color}`,
    borderBottomColor: 'transparent',
  };

  return (
    <div className={`loader-container ${className}`}>
      <div className="loader" style={loaderStyle} />
      {message && <div className="loader-message">{message}</div>}
    </div>
  );
};