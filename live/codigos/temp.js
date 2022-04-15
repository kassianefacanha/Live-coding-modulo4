
const kassiane = true;

const triagem = new Promise((resolve, reject)=>{

    if (kassiane == true)  {
        resolve('Compriu a promessa')
    } else {
        reject('Não cumpriu')
    }

})
.then((msgCumprinda)=>{
    console.log('[ALERTA]', msgCumprinda)
})
.catch((msgFalha)=>{
    console.log('[INF]', msgFalha)
});