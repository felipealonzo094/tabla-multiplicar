/*
------------REQUIEREDS
*/

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    // return new Promise((resolve, reject) => {
    //     if (!Number(base) || !Number(limite)) {
    //         reject(`El Valor "${base}" o el valor "${limite}" no es un numero`);
    //         return;
    //     }
    console.log('====='.yellow);
    console.log('============'.green);
    console.log(`==tabla de ${base}==`.green);
    console.log('============'.green);

    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i}= ${base*i}\n`;

    }
    (console.log(data));

    // })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El Valor "${base}" o el valor "${limite}" no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla -${base}.txt`);

        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}