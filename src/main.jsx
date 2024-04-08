import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Donations from './components/Donations/Donations.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/donations',
        element: <Donations></Donations>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
