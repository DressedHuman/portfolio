import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Loader from './components/Loader/Loader';

// Lazy load pages for code splitting
const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const HireMe = lazy(() => import('./pages/HireMe/HireMe'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <Homepage />
          </Suspense>
        )
      },
      {
        path: '/hire-me',
        element: (
          <Suspense fallback={<Loader />}>
            <HireMe />
          </Suspense>
        ),
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
