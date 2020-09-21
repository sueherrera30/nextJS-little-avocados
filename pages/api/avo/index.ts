import { IncomingMessage, ServerResponse } from 'http';
// si importamos este archivo tendremos acceso a la variable que se llama database
import DB from '@database'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    // inicializamos creando una instancia.
    const db = new DB()
    // Este manager nos expone dos metodos,getby id and getall 
    //guardamos en una variable todas las entradas:
    // como esa funcion es asyn llamamos el await, y recibiremos un array
    const allEntries = await db.getAll();

    response.statusCode =200;
    // le ponemos el header de next.js
    response.setHeader('Content-type', 'application/json')
    response.end(JSON.stringify({data: allEntries }));
}

export default allAvos;