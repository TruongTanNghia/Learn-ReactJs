//* Lib
import { Suspense } from 'react';
//* CSS
import './App.css';

//* Router
import RouterPages from './routers';
import Loading from './component/loading';

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterPages />
      </Suspense>
    </>
  );
}

export default App;
