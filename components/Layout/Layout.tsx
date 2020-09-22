import React from 'react';
import Navbar from '../Navbar';
// import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => {
    console.log('hola, layout!');
    return (
        <div
            // className={styles.containerLayout}
        >
            <Navbar />
            { children }
            <footer>this is the footer, comingo soon a exported element :P solo en cines.</footer>
        </div>
    )
};

export default Layout;