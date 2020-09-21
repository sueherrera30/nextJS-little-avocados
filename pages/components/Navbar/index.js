import React from 'react';
import Link from 'next/link';

const Navbar = () =>  (
    <div>
        <Link href="/about">
            <a>About :D </a>
        </Link>
        <Link href="/">
            <a>Home :P </a>
        </Link>
    </div>
);


export default Navbar;