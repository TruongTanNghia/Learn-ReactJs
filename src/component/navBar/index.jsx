import { Fragment, useState, useEffect } from 'react';
import {
  Bai1UseEffect,
  Bai2UseEffect,
  Bai4UseEffect,
  Bai1UseState,
  TodoList,
  // NavBar,
} from '@Imports/Import.jsx';

const Index = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSelect = (param) => {
    setSelectedExercise(param);
  };

  useEffect(() => {
    // Do something when the selected exercise changes
  }, [selectedExercise]);

  const renderSelectedExercise = () => {
    switch (selectedExercise) {
      case 'Bai1UseState':
        return <Bai1UseState />;
      case 'Bai1UseEffect':
        return <Bai1UseEffect />;
      case 'Bai2UseEffect':
        return <Bai2UseEffect />;
      case 'Bai4UseEffect':
        return <Bai4UseEffect />;
      case 'TodoList':
        return <TodoList />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div className="button-container">
        <button onClick={() => handleSelect('Bai1UseState')}>Bài 1 - useState</button>
        <button onClick={() => handleSelect('Bai1UseEffect')}>Bài 1 - useEffect</button>
        <button onClick={() => handleSelect('Bai2UseEffect')}>Bài 2 - useEffect</button>
        <button onClick={() => handleSelect('Bai4UseEffect')}>Bài 4 - useEffect</button>
        <button onClick={() => handleSelect('TodoList')}>TodoList</button>
      </div>
      {renderSelectedExercise()}
    </Fragment>
  );
};

export default Index;
