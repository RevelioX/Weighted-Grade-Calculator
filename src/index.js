import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function Holamundo(){
  return(<h1>Hola Mundo</h1>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>
  },
  {
    path: "/banana",
    element: <App/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
