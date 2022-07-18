import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Redux 
import { Provider } from "react-redux";
import { store } from "./services/store/store";

// Components 
import Home from './pages/Home';
import App from './App';

// Style 
import "./css/style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </BrowserRouter>
  </Provider>
);


