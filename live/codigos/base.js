const comunicacaoPerdida = () => Math.random() > 0.5? true : false
const promesa = new Promise((resolve, reject) =>{
    if(/*uma condição */) {
        resolve('Sucesso!');
    }
    else {
        reject('falha!');
    }
}).then((result) =>{ 
    /* fazer algo com esse resultado */
}).catch(()=> {
    /* se der algum erro:( */
});