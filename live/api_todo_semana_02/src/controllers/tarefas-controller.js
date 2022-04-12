module.exports = (app) => {
    app.get('/tarefas', (req, resp)=> {
    resp.send('<h2>Tarefas </h2>');
    });
}