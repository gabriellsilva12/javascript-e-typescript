const fs = require('fs').promises;
const path = require('path');

async function receberCaminho(caminho) {

    // caminho = path.resolve(__dirname)
    const arrayPastas = await fs.readdir(caminho)
    
    ProcurarArquivos(caminho, arrayPastas)
}


async function ProcurarArquivos(caminho, arrayPastas) {
    
    for(let file of arrayPastas){
        const filesFullPatch = path.resolve(caminho, file)
        const stats = await fs.stat(filesFullPatch)
        

        if(/node_modules/g.test(filesFullPatch)) continue;
        
        if(stats.isDirectory()){
            receberCaminho(filesFullPatch)
            continue
        }
        if(!/\.js$/g.test(filesFullPatch)) continue;
        
        console.log(filesFullPatch)
    }
}

receberCaminho('c:/Users/Gabriel/Documents/estudos/udemy/javascript-e-typescript/node/')




x