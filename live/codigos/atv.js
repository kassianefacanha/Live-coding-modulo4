const comunicacaoPerdida = () => Math.random() > 0.5 ? true : false; 
const promesa = new Promise((resolve, reject) =>{

    if(comunicacaoPerdida()) {
        reject('Comunicação perdida');
    }
    else {
        resolve('Ok todos vivos na estação');
    }
})
.then((result) =>{ 
    console.log('SUCESSO', result);
}).catch((result)=> {
    console.log('FALHA', result);
});