//falta terminar

function contarLetrasMaiusculas(frase){
    let count = 0;
    for(let i = 0; i <= frase.length; i++){
        if(frase[i] >= "A" && frase[i] <= "Z"){
            count++
        }  
    }
    return count;

}

let frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

let contarAsLetrasDaFrase = contarLetrasMaiusculas(frase)

console.log(`A frase "${frase}" tem ¨ ${contarAsLetrasDaFrase} letras maiusculas`)