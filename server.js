const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js'); //dado que hemos movido los helpers a una carpeta y al archivo helpers js solo lo requerimos sin necesidad de hacerle module exports en el archivo helpers.js
const port = process.env.PORT || 3000; //así configurado sirve tanto para heroku como para correr en local en el puerto 3000

// Para que se cargue la web presente en public hay que crear un middleware es un callback y se ejecuta siempre sin importar que url se usa en este codigo

app.use(express.static(__dirname + '/public'));

//para no tener que instalar las partials de hbs se usa la dirección de ruta, los parciales sirven para crear subpaginas dentro de la pagina principal como el about-old.html
hbs.registerPartials(__dirname + '/views/partials');

//Express HBS engine para no tener un texto estático en la página y poder darle dinamismo a la página
app.set('view engine', 'hbs');

//aqui estaban antes los helpers de helpers.js


//esta parte primero se comenta si se usa express
// app.get('/', function(req, res) {
//     // res.send('Soy Claudio');
//     let salida = {
//         nombre: 'Claudio',
//         edad: 27,
//         url: req.url
//     };

//     res.send(salida); // con esto se envía en la salida nuestro objeto en formato json
// });
//se comenta para que no entre en conflicto con el middleware statico creado ya que la otra parte es nuestra web
//con esto se monta una web rápida que se puede ver en http//:localhost:3000/

//la misma parte de antes no se comenta si al usar express se usa también las views de hbs, pero al usar las views de hbs instaladas con "npm install hbs --save" en la carpeta views, se debe renderizar
// de alli que se use el comando render en la respuesta "res" y no se usa send.
app.get('/', (req, res) => {


    res.render('home', {
            // nombre: 'Claudio',
            nombre: 'clAUdIo', //lo escribimos combinando mayusculas y minusculas adrede para que al usar los helpers capitalizar hagan su funcion 
            // anio: new Date().getFullYear() //descomentar si no se usan los **helpers**
        }) //a diferencia de send en render se le pueden pasar objetos que guarden valores de variables como por ejemplo las variables {{nombre}} y {{anio}} declaradas en HTMLFormElement.hbs


});


// para cuando se use express y hbs y necesitemos más pestañas dentro de la web que abran otras subpaginas debemos crear otro app.get
app.get('/about', (req, res) => {


    res.render('about', {
            anio: new Date().getFullYear()
        }) //a diferencia de send en render se le pueden pasar objetos que guarden valores de variables como por ejemplo las variables {{nombre}} y {{anio}} declaradas en HTMLFormElement.hbs


});

//si queremos irnos a otra parte la misma url por ejemplo digamos que tenemos datos y hay que llegar a la url http//:localhost:3000/data hay que hacer otro app.get con ('/data')

// app.get('/data', function(req, res) {
//     res.send('Estos son los datos');

// });
//así tendríamos creada otra pestaña dentro de la web por ejemplo ahora podríamos hacer que con un enlace desde la web principal nos abra esta en otra pestaña o podría permitirnos navegar dentro de la web
//se comenta para que no entre en conflicto con el middleware statico creado ya que la otra parte es nuestra web

app.listen(port, () => {
    console.log(`Escuchando el puerto ${ port }`);
});