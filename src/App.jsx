import React from 'react'
import ReactDOM from 'react-dom/client'
import './CSS/index.css'
import Header from './Header'
import Form from './Form'
import background from "background.jpg"

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
        <Header />
        <Form />
 </React.StrictMode>
);

document.body.style.backgroundImage = `url(${background})`;
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';