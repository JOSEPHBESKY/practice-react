import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import products from './products.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
function main() {
    console.log('products',products);
    return(
        <App /> 
       {
        products.map((products,index)=><p key={index}>{products.name}</p>)
       }
    )
}
root.render(
    <main/>
);


