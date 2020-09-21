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
            <h1 style={{ color: "papayawhip" }}>Hola, next.js! this is home baby </h1>
            {
              productList.map(avocado => (<div key={avocado.id}>{avocado.name}</div> ))
            }
        </div>
    )
};

export default Home;