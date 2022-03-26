import { useEffect, useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return count;
};

export default useCount;
