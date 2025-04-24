import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import HrPage from './pages/HrPage.jsx'
import HitsPage from './pages/HitsPage.jsx'
import YearsPage from './pages/YearsPage.jsx'
import HofPage from './pages/HofPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/homeruns",
        element: <HrPage />
      },
      {
        path: "/hits",
        element: <HitsPage />
      },
      {
        path: "/years",
        element: <YearsPage />
      },
      {
        path: '/hof',
        element: <HofPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
