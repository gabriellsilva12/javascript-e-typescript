/*VALORES FALSE E TRUE

/ VALORES FALSE
    FALSE (LITERALMENTE)
    0 // ZERO É CONSIDERADO UM VALOR FALSO
    '' "" `` // STRINGS VAZIAS SÃO CONSIDERADAS FALSAS
    NULL E UNDEFINED // SÃO CONSIDERADAS STRINGS VAZIAS
    NaN / NOT A NUMBER TAMBEM É CONSIDERADO FALSE



*/

function falaOi () {
    return 'oi'
}

const vaiExecutar = undefined

console.log(vaiExecutar && falaOi())
