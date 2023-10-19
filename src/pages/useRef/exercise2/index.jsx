import { useEffect, useRef, useState } from 'react';

const Bai2UseRef = () => {
  const [count, setCount] = useState(0);
  const prevIdCount = useRef(count);
  const stopCount = useRef();

  const handleCounter = () => {
    stopCount.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(stopCount.current);
  };
  useEffect(() => {
    prevIdCount.current = count;
  }, [count]);

  console.log(prevIdCount, 'nó là cái quầN què gì ?');
  return (
    <>
      <h1 ref={prevIdCount}>New: {count}</h1>
      <h1>Old: {prevIdCount.current}</h1>
      <button onClick={handleCounter}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
export default Bai2UseRef;
