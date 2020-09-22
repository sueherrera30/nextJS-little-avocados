import React from 'react';
import Link from 'next/link';

const Navbar = () =>  (
    <div className="navbar">
         <Link href="/">
            <a className="text-navbar">store</a>
        </Link>
        <Link href="/about">
            <a className="text-navbar">cart</a>
        </Link>
        <style jsx> {`
                .navbar {
                    width: 100%;
                    height: 80px;
                    background: #202528;
                    color: #8ee2cf;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
                .text-navbar {
                    color: #8ee2cf;
                    text-decoration: none;
                    font-family: 'Poiret One', cursive;
                    font-weight: 600;
                    font-size: 20px;
                    letter-spacing: 2px;
                    
                }
            `}
        </style>
    </div>
);


export default Navbar;