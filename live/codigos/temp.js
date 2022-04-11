const giz = require('chalk')

function temperaturaPaciente() {
    const min = 36.0;
    const max = 42.0;

    const temp = (Math.random() * (max - min) + min).toFixed(2);
    return temp;
}

const ehFebril = (temp) => {
    if (temp > 37.5) return true;
    else return false;
}


const triagem = new Promise((resolve, reject)=>{

    const temp = temperaturaPaciente()

    if (ehFebril(temp))  {
        resolve('Paciente Febril')
    } else {
        reject('Paciente não é Febril')
    }

})
.then((msgCumprinda)=>{
    setTimeout(() => {console.log(giz.red('[ALERTA]', msgCumprinda))}, 3000)
})
.catch((msgFalha)=>{
    setTimeout(() => {console.log(giz.green('[INF]', msgFalha))}, 3000)
});