






































function espera(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}


async function chamaEspera() {

    console.log('Começou.')
    await espera(2000)
    console.log('Esperou...')
    console.log('Acabou.')

}


chamaEspera()
