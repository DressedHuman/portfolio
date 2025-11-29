import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Loader from './components/Loader/Loader';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import AdminLayout from './components/Admin/AdminLayout';

// Lazy load pages for code splitting
const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const HireMe = lazy(() => import('./pages/HireMe/HireMe'));
const Login = lazy(() => import('./pages/Admin/Login'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AboutEditor = lazy(() => import('./pages/Admin/AboutEditor'));
const MessagesViewer = lazy(() => import('./pages/Admin/MessagesViewer'));

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
  },
  {
    path: '/admin/login',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loader />}>
            <AdminDashboard />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loader />}>
            <AboutEditor />
          </Suspense>
        ),
      },
      {
        path: 'messages',
        element: (
          <Suspense fallback={<Loader />}>
            <MessagesViewer />
          </Suspense>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
)
