import React from 'react';
import { Router, useRouter } from 'next/router';

const ProductItem = () => {
    // sin destructurar: 
    // const router = useRouter();

    // destructurado:
    const { query: { id }} = useRouter();

    return (
    //     <div>
    //     Hola, producto item dinamico ;) con el ID: <h1>{router.query.id}</h1>
    //    </div>

        <div>
         Hola, producto item dinamico ;) con el ID: <h1>{id}</h1>
        </div>
    );
};

export default ProductItem;