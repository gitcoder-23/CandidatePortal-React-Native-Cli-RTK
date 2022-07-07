import {useState} from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [conPassVisibility, setConPassVisibility] = useState(true);
  const [passVisibility3, setPassVisibility3] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye-off');
  const [rightConIcon, setRightConIcon] = useState('eye-off');
  const [rightIcon3, setRightIcon3] = useState('eye-off');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handleConPasswordVisibility = () => {
    if (rightConIcon === 'eye') {
      setRightConIcon('eye-off');
      setConPassVisibility(!conPassVisibility);
    } else if (rightConIcon === 'eye-off') {
      setRightConIcon('eye');
      setConPassVisibility(!conPassVisibility);
    }
  };

  const handlePasswordVisibility3 = () => {
    if (rightIcon3 === 'eye') {
      setRightIcon3('eye-off');
      setPassVisibility3(!passVisibility3);
    } else if (rightIcon3 === 'eye-off') {
      setRightIcon3('eye');
      setPassVisibility3(!passVisibility3);
    }
  };

  return {
    passwordVisibility,
    conPassVisibility,
    passVisibility3,
    rightIcon,
    rightConIcon,
    rightIcon3,
    handlePasswordVisibility,
    handleConPasswordVisibility,
    handlePasswordVisibility3,
  };
};
