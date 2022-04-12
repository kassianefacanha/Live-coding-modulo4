module.exports = (app) => { 
    app.get('/usuarios', (req, resp)=> {
        resp.send('<h1>Usuarios</h1>');
    });
}
