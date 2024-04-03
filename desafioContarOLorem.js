let frase = "What is Lorem Ipsum?";

let contarEspacos = frase.split(" ").length - 1

let caracter = frase.length

let contarAsLetras = caracter - contarEspacos;

 
console.log(`A frase "${frase}" tem ${contarAsLetras} caracteres contando sem espaçamentos`);
console.log(`A frase Tem ${caracter} caracteres contando os com espaçamentos`)

