// import { useState } from 'react';
import { Fragment } from 'react';
import './App.css';

import { Bai1UseEffect } from '@Imports/Import.jsx';
import { Bai2UseEffect } from '@Imports/Import.jsx';
import { Bai1UseState } from '@Imports/Import.jsx';

function App() {
  // <button onClick="">Bài 1 {Bai1useState}</button>;
  return (
    <Fragment>
      <Bai1UseState />
      <Bai1UseEffect />
      
    </Fragment>
  );
}

export default App;
