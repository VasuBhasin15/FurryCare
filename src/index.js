import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
},
{
  path:"AboutUs",
  element:<AboutUs/>,
},
{
  path:"ContactUs",
  element:<ContactUs/>
}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}></RouterProvider>
);


