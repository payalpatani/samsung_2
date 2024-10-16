import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  { myStore } from '../src/componet/Redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</Provider>
 
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from '../src/componet/Reduxx/Store';
// import App from './App';

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

