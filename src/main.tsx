import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Root from './components/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HireMe from './pages/HireMe/HireMe';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/hire-me',
        element: <HireMe />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes} />
)
