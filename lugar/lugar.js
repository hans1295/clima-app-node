const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    //console.log(encodeUrl);
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiaGFuczEyOTUiLCJhIjoiY2tleG1keWZuMHhrYzJ6bDlucnlyc2N4cyJ9.u4lfNP-tjj6kiLOGuM-ccg' }
    });

    const resp = await instance.get()

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.geometry.coordinates[1];
    const lng = data.geometry.coordinates[0];



    return { direccion, lat, lng }

}

module.exports = {
    getLugarLatLng
}