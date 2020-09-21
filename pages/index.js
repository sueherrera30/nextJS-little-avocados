import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    console.log('hola, next home!');
    return (
        <div>
            <Navbar />
            <h1 style={{ color: "papayawhip" }}>Hola, next.js! this is home baby </h1>
        </div>
    )
};

export default Home;