function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, sou uma promesa.')
            resolve()
        }, 2000);
    })
}


export default async function chamaPromise() {
    await promise()
    console.log('fimmm')
}
