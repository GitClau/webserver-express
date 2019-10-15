//como tenemos node instalado en el equipo se puede usar http directamente sino habría que instalar la librería desde node.js
//así que usamos el pquete de http para crear un servidor de manera muy rápida
// esto se hace si queremos usar http desde node
//pero se puede usar desde express mirar en el modulo server. js que hemos creado en la carpeta 6

const http = require('http');

http.createServer((req, res) => {

        //si queremos mostrar un archivo json en vez de una web directamente escribimos
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Claudio',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));


        //Si queremos mostrar solo texto en la web
        // res.write('soy Claudio'); // esto es una funcion para escribir algo en el servidor web
        res.end(); //para terminar el evento y que salga la web 

    })
    .listen(8080);

console.log('Escuhcando el puerto 8080');