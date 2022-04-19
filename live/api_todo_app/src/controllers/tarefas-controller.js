module.exports = (app) => {
    app.get('/tarefas', (req, resp)=> {
    resp.send('Tarefas ');
    });
}