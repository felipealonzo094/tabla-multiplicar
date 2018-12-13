/*
------------CODE
*/
const { crearArchivo } = require('./Multiplicar/multiplicar.js')
const { listarTabla } = require('./Multiplicar/multiplicar.js')
const argv = require('./config/yargs').argv

const colors = require('color');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            // .then(archivo => console.log(archivo))
            // .catch(e => console.log(e));

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}

// let argv2 = process.argv;
// console.log(argv.base);

// console.log(argv.limite);

// let parametro = argv[2];

// let base = parametro.split('=')[1];
// console.log(base);