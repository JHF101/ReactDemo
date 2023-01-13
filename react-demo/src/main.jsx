import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import getApiToken from './auth/auth';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "app",
    element: <App />,
  },
  {
    path: "home",
    element: <div>Home</div>,
  },
]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
