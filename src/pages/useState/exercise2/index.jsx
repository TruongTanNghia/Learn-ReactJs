// import React from 'react'
import { useState } from 'react';

const Changercolor = () => {
  const listColors = [
    '#00aefd',
    '#ffa400',
    '#07a787',
    '#ff7870',
    'black',
    'pink',
    'yellow',
    '#e74c3c',
    '#2979ff',
    'aqua',
  ];
  const [flagColor, setColor] = useState({ color: 'blue' });
  console.log(flagColor);
  const changeColor = () => {
    // Dòng này tức là tôi sẽ ramdom ra 1 số nguyên ngẫu nhiên từ 0-n phần tử trong chuỗi listColors cho trước và sẽ trả về màu tương ứng với số phần tử mà đã random ra trước đó
    const randomColor = listColors[Math.floor(Math.random() * listColors.length)];
    // console.log(randomColorr)
    setColor({ color: randomColor });
  };
  return (
    <>
      <h1 style={flagColor}>May quá chưa đóng tiền</h1>
      <button onClick={changeColor}>ChangeColor</button>
    </>
  );
};

export default Changercolor;
