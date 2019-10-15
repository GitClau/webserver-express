const hbs = require('hbs');

//helpers se usan cuando al saltar de una pagina home a una subpagina o a una pagina diferente de home y se deben importar variables. ocn esto nos aseguramos que siempre los tengamos sin importar en que página estamos
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


//hacemos otro helper para poner en mayusculas algunos textos
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(' ');
});

//no hace falta hacerle el module exports ya que todo esto va incorporado dentro del require hbs