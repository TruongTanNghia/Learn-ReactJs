import { useRef, useState, useEffect } from 'react';

const Bai1UseRef = () => {
  const [count, setCount] = useState(60);

  const timeIdRef = useRef();
  const prevCount = useRef();
  const elementRef = useRef();

  //* Old number count
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  //* Start Counter
  const handleCounter = () => {
    timeIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  //* Stop Counter
  const handleStop = () => {
    clearInterval(timeIdRef.current);
  };

  //* Reset Count to initial value
  const handleClear = () => {
    clearInterval(timeIdRef.current);
    setCount(60);
  };

  console.table([
    {
      newConut: count,
      oldCount: prevCount.current,
    },
  ]);
  console.log(elementRef);
  return (
    <>
      <h1 ref={elementRef}>{count}</h1>
      <button onClick={handleCounter}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default Bai1UseRef;
