import React from 'react'
import ReactDOM from 'react-dom/client'
import './CSS/index.css'
import Header from './Header'
import Form from './Form'
import background from "../images/background.jpg"

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <div className="background"> 
      <Header />
      <Form />
    </div>
 </React.StrictMode>
);