import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './View/Home/Home.jsx';
import HomeCard from './View/HomeCard/HomeCard'


const router = createBrowserRouter([
  {
    path: "/",
    
    element: <Home />,
  },
  {
    path: "/Home",
    element: <HomeCard  />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
