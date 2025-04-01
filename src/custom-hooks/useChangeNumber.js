import {useState} from 'react';

export const useChangeNumber = (initialValue = 0) => {
  const [state, setState] = useState(initialValue);

  const increaseNumber = () => {
    setState((number) => number + 1);
  };

  const decreaseNumber = () => {
    setState((number) => number - 1);
  };

  const resetNumber = () => {
    setState(0);
  };

  return [state, increaseNumber, decreaseNumber, resetNumber];
};