import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// importando router e paginas

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Paginas/Home/Home";
import Sabores from "./Paginas/Sabores/Sabores";
import Sobre from './Paginas/Sobre/Sobre'
import ErrorPage from './Paginas/ErrorPage/ErrorPage';

//ligando a urls a pagina
const router = createBrowserRouter([
  {
    // elemento pai (APP) é a pagina principal para reaproveitamento de codigo header e footer.
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "sabores",
        element: <Sabores />
      },
      {
        path: "sobre",
        element: <Sobre />
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// Para poder ter a alteração das paginas por url tem que ter <RouterProvider router={router} /> 

root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
