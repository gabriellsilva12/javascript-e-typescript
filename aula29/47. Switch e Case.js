let data = new Date();
let date = data.getDay();

//NO SWITCH EU PODERIA USAR TAMBEM O RETURN NO LUGAR DO BREAK, POIS ELES TERIAM A MESMA FUNÇÃO
//BREAK = SAI DO BLOCO E NÃO EXECUTA O QUE TIVER EM BAIXO 
//RETURN = SAI DO BLOCO E NÃO EXECUTA O QUE TIVER EM BAIXO, ELE SERVE TANTO PARA SWITCH COMO PARA FUNÇÕES


switch (date) {
    case 0:
        date = 1
        console.log(`Hoje é Domingo, dia ${date} da semana`)
        break // BREAK É ESSENCIAL NO SWITCH, POIS APOS ACHAR O VALOR ELE SAI DO BLOCO
    case 1:
        date = 2
        console.log(`Hoje é Segunda, dia ${date} da semana`)
        break
    case 2:
        date = 3
        console.log(`Hoje é Terça, dia ${date} da semana`)
        break
    case 3:
        date = 4
        console.log(`Hoje é Quarta, dia ${date} da semana`)
        break
    case 4:
        date = 5
        console.log(`Hoje é Quinta, dia ${date} da semana`)
        break
    case 5:
        date = 6
        console.log(`Hoje é Sexta, dia ${date} da semana`)
        break
    case 6:
        date = 7
        console.log(`Hoje é Sabado, dia ${date} da semana`)
        break
    default: // DEFAULT É COMO SE FOSSE O ELSE DO SWITCH, SE NENHUM DOS CASE ACIMA FOR EXECUTADO, ELE IRA EXECUTAR O DEFAULT COMO UM FALLBACK( PLANO B )
        date = `Dia ${date} inválido`
        break
}