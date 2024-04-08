import React from 'react'
import ReactDOM from 'react-dom/client'
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
import DonationsDetails from './components/DonationDetails/DonationsDetails.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        loader: ()=> fetch('donationsData.json'),
        element: <Home></Home>
      },
      {
        path: '/donations',
        loader: () => fetch('donationsData.json'),
        element: <Donations></Donations>
      },
      {
        path:'/statistics',
        loader: () => fetch('donationsData.json'),
        element: <Statistics></Statistics>
      },
      {
        path:'/details/:id',
        loader: () => fetch('donationsData.json'),
        element: <DonationsDetails></DonationsDetails>
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
