import React from 'react';
import Navbar from '../Navbar';

// pasamos children para hacer dinamico contenido.
// esto le dira anode, que esto sera un node, lago que react podrá renderizar.
const Layout: React.FC = ({ children }) => {
    console.log('hola, layout!');
    return (
        <div>
            <Navbar />
            { children }
            <footer>this is the footer, comingo soon a exported element :P solo en cines.</footer>
        </div>
    )
};

export default Layout;