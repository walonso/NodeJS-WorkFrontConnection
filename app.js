const http = require('http');
const wf = require('./workfront/connection');

let getInfo = async() => {

    try {
        let resp = await wf.getResponseFromWorkfront();

        return resp;
    } catch (error) {
        return `Error!!! ` + error;
    }

}


getInfo()
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



/*http.createServer((req, res) => {

        getInfo()
            .then(mensaje => res.write(JSON.stringify(mensaje)))
            .catch(e => console.log(e));


        res.end();
    })
    .listen(8080);

console.log('Escuchando 8080');
*/