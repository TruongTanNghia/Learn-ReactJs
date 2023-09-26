// import { useState } from 'react';
import { Fragment } from 'react';
import './App.css';
// import Index from '@useEffect/bai2/Index.jsx';
import { Bai2 } from '@Imports/Import.jsx';
import { Bai1useState } from '@Imports/Import.jsx';
function App() {
  // <button onClick="">Bài 1 {Bai1useState}</button>;
  return (
    <Fragment>
      <Bai1useState />
      <Bai2 />
    </Fragment>
  );
}

export default App;
