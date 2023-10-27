import React from 'react'
import ReactDOM from 'react-dom/client'
import './CSS/index.css'
import Header from './Header'
import Form from './Form'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
        <Header />
        <Form />
 </React.StrictMode>
);