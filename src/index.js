import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Shop from './Shop';
import reportWebVitals from './reportWebVitals';
import 'react-multi-carousel/lib/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import Naviagation from './components/Navigation/Naviagation';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}>
    <Naviagation />
       {/* <Shop /> */}
    </RouterProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
