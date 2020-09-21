import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database'

const Avocado = async (request: NextApiRequest, response: NextApiResponse) => {

    const db = new DB();

    //1. primero debemos capturar el id que nos estan enviando.
    // como node, através de objeto request que nos trae todaa la información del reques que recibe el servidor.
    // usando de next, el query, pero como no lo identifica, debemos en lugar de usar el modulo de http, cambiarlo a next, eso verlo arriba.

    const id = request.query.id;
    // usaremos la base de datos para obtener el id, rellaciondo 
    const avo = await db.getById(id as string);

    // response.statusCode =200;
    // response.setHeader('Content-type', 'application/json')
    // response.end(JSON.stringify({data: entry }));

    // next nos ofrece otra forma de acceder , ejemplo lo puesto arriba puede ser igual a: 
    response.status(200).json(avo);
}

export default Avocado;