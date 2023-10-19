import { useEffect, useRef, useState } from 'react';

const Bai3UseRef = () => {
  const [name, setName] = useState('');
  const elementRef = useRef();

  const handleClear = () => {
    setName('');
    elementRef.current.focus();
  };

  const handleQuickly = () => {
    elementRef.current.value = 'Oke Con Dê ';
  };

  useEffect(() => {
    elementRef.current.focus();
  }, []);

  console.log(elementRef, '1----------');
  return (
    <>
      <input
        type="text "
        ref={elementRef}
        value={name}
        autoComplete="on"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClear ? handleClear : ''}>Clear</button>
      <button onClick={handleQuickly}>Quickly</button>
    </>
  );
};

export default Bai3UseRef;
