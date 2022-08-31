import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/App';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import UserView from './Routes/UserView';
import NavigateHaikoos from './Routes/NavigateHaikoos';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    

   
    <BrowserRouter>
    <Routes>
  
      <Route path="/" element={<App />} />
      <Route path="/account" element={<UserView />} />
      <Route path="/explore" element={<NavigateHaikoos />} />
     
  
    </Routes>
    
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







