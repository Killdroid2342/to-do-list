import { useEffect, useState } from 'react';

const useLocalStorage = (defaultValue, key) => {
  const [value, setNumber] = useState(() => {
    const dynamic = window.localStorage.getItem(key);
    // console.log(dynamic, 123);
    return dynamic !== null ? JSON.parse(dynamic) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setNumber];
};

export default useLocalStorage;
