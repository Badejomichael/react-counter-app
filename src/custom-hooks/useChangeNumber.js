import {useState} from 'react';

export const useChangeNumber = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const [message, setMessage] = useState("")

  const increaseNumber = () => {
    setCount((number) => (setMessage(""), (number + 1)));
  };

  const decreaseNumber = () => {
    setCount((number) => number >= 1 ? (number - 1) : (setMessage("Minimum Reached!"), number));
  };

  const resetNumber = () => {
    setCount(0);
    setMessage("");
  };

  return [count, increaseNumber, decreaseNumber, resetNumber, message];
};