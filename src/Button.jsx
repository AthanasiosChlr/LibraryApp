import React from 'react';

const Button = ({ buttonText, onClick, style }) => {
  const buttonStyle = {
    width: '140px',
    height: '45px',
    border: 'none',
    borderRadius: '10px',
    background: 'linear-gradient(to right, #77530a, #ffd277, #77530a, #77530a, #ffd277, #77530a)',
    backgroundSize: '250%',
    backgroundPosition: 'left',
    color: '#ffd277',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-position 1s, transform 0.5s',
    overflow: 'hidden',
  };

  const buttonContentStyle = {
    position: 'absolute',
    content: `"${buttonText}"`,
    color: '#ffd277',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '97%',
    height: '90%',
    borderRadius: '8px',
    transition: 'background-position 1s',
    backgroundColor: 'rgba(0, 0, 0, 0.842)',
    backgroundSize: '200%',
  };

  return (
    <button
      style={{ ...buttonStyle, ...style }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundPosition = 'right')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundPosition = 'left')}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <span style={buttonContentStyle}>{buttonText}</span>
    </button>
  );
}

export default Button;
