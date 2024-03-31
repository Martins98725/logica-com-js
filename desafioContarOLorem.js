let palavra = "What is Lorem Ipsum?";

let contarEspacos = palavra.split(" ").length - 1

let caracter = palavra.length

let contarAsLetras = caracter - contarEspacos;

 
console.log(`A palavra "${palavra}" tem ${contarAsLetras} caracteres contando sem espaçamentos`);
console.log(`A palavra Tem ${caracter} caracteres contando os com espaçamentos`)

