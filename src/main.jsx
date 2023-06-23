import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {Provider} from './context/books';

 

let el = document.getElementById('root');
let root = ReactDOM.createRoot(el);
root.render(
<Provider  >
  <App/>
</Provider>
) ;