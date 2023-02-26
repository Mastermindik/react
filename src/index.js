import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./components/static/NotFound"
import AddIncomes from './components/addIncomes/AddIncomes';
import IncomesHistory from "./components/IncomesHistory";
import Options from "./components/Options";
import Statistic from "./components/Statistic"
import LogIn from './components/static/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [{
      path: "/addIncomes",
      element: <AddIncomes/>
    }, {
      path: "/history",
      element: <IncomesHistory/>
    }, {
      path: "/options",
      element: <Options/>
    }, {
      path: "/statistic",
      element: <Statistic/>
    }]
  }, {
    path: "/login",
    element: <LogIn/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
