import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import "react-toastify/dist/ReactToastify.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// const store = configureStore();

const root = createRoot(document.getElementById('root'));

root.render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);

reportWebVitals();
