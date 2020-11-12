import { useEffect } from 'react';

const handleTabbing = (event) => {
  if (event.key === 'Tab') {
    document.body.classList.add('focus-outline');
  }
};

const handleClicking = () => {
  document.body.classList.remove('focus-outline');
};

const HandleFocusingOutline = () => {
  useEffect(() => {
    window.addEventListener('keydown', handleTabbing);
    window.addEventListener('click', handleClicking);

    return () => {
      window.removeEventListener('keydown', handleTabbing);
      window.removeEventListener('click', handleClicking);
    };
  });

  return null;
};

export default HandleFocusingOutline;
