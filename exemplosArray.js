/*
 * Este arquivo contém exemplos de manipulações comuns em arrays utilizando JavaScript.
 * 
 * Importante: A indexação em JavaScript começa em 0. Isso significa que o primeiro elemento
 * de um array está na posição 0, o segundo na posição 1, e assim por diante.
 * 
 * Por exemplo:
 * let array = [10, 20, 30];
 * console.log(array[0]); // Saída: 10 (primeiro elemento)
 * console.log(array[1]); // Saída: 20 (segundo elemento)
 * console.log(array[2]); // Saída: 30 (terceiro elemento)
 */

// Inserção
let array1 = [1, 2, 3];
array1.push(4); // Adiciona no final
array1.unshift(0); // Adiciona no início
console.log('Inserção:', array1); // [0, 1, 2, 3, 4]

// Remoção
let array2 = [1, 2, 3, 4];
array2.pop(); // Remove o último elemento
array2.shift(); // Remove o primeiro elemento
console.log('Remoção:', array2); // [2, 3]

// Substituição
let array3 = [1, 2, 3];
array3[1] = 5; // Substitui o elemento na posição 1
console.log('Substituição:', array3); // [1, 5, 3]

// Busca
let array4 = [1, 2, 3, 4];
let index = array4.indexOf(3); // Retorna a posição do elemento
console.log('Busca:', index); // 2

// Ordenação
let array5 = [4, 2, 3, 1];
array5.sort((a, b) => a - b); // Ordena em ordem crescente
console.log('Ordenação:', array5); // [1, 2, 3, 4]

// Filtragem
let array6 = [1, 2, 3, 4, 5];
let filtered = array6.filter(num => num > 2); // Filtra números maiores que 2
console.log('Filtragem:', filtered); // [3, 4, 5]

// Mapeamento
let array7 = [1, 2, 3];
let mapped = array7.map(num => num * 2); // Multiplica cada elemento por 2
console.log('Mapeamento:', mapped); // [2, 4, 6]

// Redução
let array8 = [1, 2, 3, 4];
let sum = array8.reduce((acc, num) => acc + num, 0); // Soma todos os elementos
console.log('Redução:', sum); // 10

// Divisão
let array9 = [1, 2, 3, 4, 5];
let chunked = [];
for (let i = 0; i < array9.length; i += 2) {
    chunked.push(array9.slice(i, i + 2)); // Divide em subarrays de tamanho 2
}
console.log('Divisão:', chunked); // [[1, 2], [3, 4], [5]]

// Concatenação
let array10 = [1, 2, 3];
let array11 = [4, 5, 6];
let concatenated = array10.concat(array11); // Combina os arrays
console.log('Concatenação:', concatenated); // [1, 2, 3, 4, 5, 6]

// Iteração
let numeros = [1, 2, 3, 4, 5];

// Usando for...of para iterar sobre o array
for (let numero of numeros) {
    console.log(numero); // Exibe cada número no array
}

// split
// O método split divide uma string em um array de substrings com base em um separador.
let frutas = "maçã,banana,laranja";
let arrayFrutas = frutas.split(","); // Divide a string usando a vírgula como separador
console.log(arrayFrutas); // ['maçã', 'banana', 'laranja']
