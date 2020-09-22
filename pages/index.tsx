import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    const [productList, setProductList] = useState <TProduct[]> ([]);
    useEffect(() => {
        window.fetch('/api/avo')
        .then((response) => response.json())
        .then(({ data, length }) => {
            setProductList(data);
        })
    },[]);
    return (
        <div>
            <div className="logo-container">
             <span className="title"> AGUA </span>
             <img className="logo" src="/images/aguacate.png" />
             <span className="title">caTitos</span>
            </div>
            {
              productList.map(avocado => (<div key={avocado.id}>{avocado.name}</div> ))
            }
            <style jsx> {`
              .title {
                color: #8ee2cf;
                text-decoration: none;
                font-family: 'Quicksand', sans-serif;
                font-weight: 600;
                font-size: 40px;
                letter-spacing: 4px;
                text-align: center;
              }
              .title:first-child {
                  color: #88D57F;
              }
              .logo {
                  width: 60px;
              }
              .logo-container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 150px;
              }
            `}
            </style>
        </div>
    )
};

export default Home;