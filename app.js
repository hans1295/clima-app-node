const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;


//argv.direccion
//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log);

//clima.getClima(40.7648, -73.9808)
//  .then(console.log)
// .catch(console.log);

const getInfo = async(direccion) => {

    /* ASI LO HICE YO(ARIN)
    const result = await lugar.getLugarLatLng(direccion);

    if (result.length === 0) {
        throw new Error('No se encontro el lugar');
    } else {

        const temp = await clima.getClima(result.lat, result.lng);

        if (clima.length === 0) {
            throw new Error(`No se pudo determinar el clima de ${ result.direccion}`);
        }

        return {
            dir: result.direccion,
            temp: temp
        };
    } */

    // ASI LO HIZO EL CURSO
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`
    } catch (error) {
        return ` No se pudo determinar el clima de ${direccion}. `
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);