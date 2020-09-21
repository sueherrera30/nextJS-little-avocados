import React from 'react';
import Navbar from './components/Navbar';

const About = () => {
    console.log('hola, next!');
    return (
        <div>
            <Navbar />
            <h2 style={{ color: "darkcyan" }}>
                Hola, pagina estática : A B O U T!
            </h2>
        </div>
    )
};

export default About;