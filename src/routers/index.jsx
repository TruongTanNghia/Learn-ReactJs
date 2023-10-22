//* Import
import {
  Bai1UseEffect,
  Bai2UseEffect,
  Bai4UseEffect,
  Bai1UseState,
  Bai2UseState,
  Bai3UseState,
  NavBar,
  HomePage,
  NotfoundPage,
  Bai1UseRef,
  Bai2UseRef,
  Bai3UseRef,
  Bai4UseRef,
  Bai5UseRef,
  Bai6UseRef,
  Bai1UseReducer,

  // NavBar,
} from '@/imports/Import';
import { useRoutes } from 'react-router-dom';
import OutletChild from './outletChild';

const RouterPage = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: (
        <OutletChild>
          <NavBar />
        </OutletChild>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'useState',
          children: [
            {
              path: 'bai1useState',
              element: <Bai1UseState />,
            },
            {
              path: 'bai2useState',
              element: <Bai2UseState />,
            },
            {
              path: 'bai3useState',
              element: <Bai3UseState />,
            },
          ],
        },
        {
          path: 'useEffect',
          children: [
            {
              path: 'bai1useEffect',
              element: <Bai1UseEffect />,
            },
            {
              path: 'bai2useEffect',
              element: <Bai2UseEffect />,
            },
            {
              path: 'bai4useEffect',
              element: <Bai4UseEffect />,
            },
          ],
        },
        {
          path: 'useRef',
          children: [
            {
              path: 'bai1useRef',
              element: <Bai1UseRef />,
            },
            {
              path: 'bai2useRef',
              element: <Bai2UseRef />,
            },
            {
              path: 'bai3useRef',
              element: <Bai3UseRef />,
            },
            {
              path: 'bai4useRef',
              element: <Bai4UseRef />,
            },
            {
              path: 'bai5useRef',
              element: <Bai5UseRef />,
            },
            {
              path: 'bai6useRef',
              element: <Bai6UseRef />,
            },
          ],
        },
        {
          path: 'projects',
          children: [],
        },
        {
          path: 'useReducer',
          children: [
            {
              path: 'bai1UseReducer',
              element: <Bai1UseReducer />,
            },
          ],
        },
      ],
    },
    {
      path: '/*',
      element: <NotfoundPage />,
    },
  ]);
  return elements;
};

export default RouterPage;
