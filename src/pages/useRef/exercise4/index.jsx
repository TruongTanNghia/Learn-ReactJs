import { useRef } from 'react';

const Bai4UseRef = () => {
  const sizeRef = useRef();
  const handleSize = () => {
    sizeRef.current.style.width = '550px';
    sizeRef.current.style.height = '550px';
  };

  const handleClearSize = () => {
    sizeRef.current.style.width = '240px';
    sizeRef.current.style.height = '100px';
  };

  return (
    <>
      <input
        type="text"
        ref={sizeRef}
        style={{ width: '240px', height: '100px' }}
        onChange={(e) => e.target.value}
      />

      <button onClick={handleSize}>UP SIZE</button>
      <button onClick={handleClearSize}> Clear </button>
    </>
  );
};

export default Bai4UseRef;
