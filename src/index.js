// React 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Redux 
import { Provider } from "react-redux";
import  store  from "./services/store";
// Pages 
import Home from './pages/Home';
import Employee from './pages/Employee';
import Error from './pages/Error';

// Style 
import "./css/style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Error />} />
      </Routes>
     </BrowserRouter>
  </Provider>
);


