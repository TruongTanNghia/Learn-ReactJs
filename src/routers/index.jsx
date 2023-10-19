//* Import
import {
  Bai1UseEffect,
  Bai2UseEffect,
  Bai4UseEffect,
  Bai1UseState,
  Bai2UseState,
  Bai3UseState,
  TodoList,
  NavBar,
  HomePage,
  NotfoundPage,
  Bai1UseRef,
  Bai2UseRef,
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
          ],
        },
        {
          path: 'projects',
          children: [
            {
              path: 'projects1',
              element: <TodoList />,
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
