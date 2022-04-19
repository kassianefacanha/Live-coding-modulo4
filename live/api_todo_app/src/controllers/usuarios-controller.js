const Usuario = require('../models/usuario-models')
module.exports = (app) => { 
    app.get('/usuarios', (req, resp)=> {
        resp.send('Usuarios');
    });
}
