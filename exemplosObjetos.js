/*
 * Este arquivo contém exemplos de manipulações comuns em objetos utilizando JavaScript.
 * 
 * Importante: Em JavaScript, os objetos são coleções de pares chave-valor.
 * Cada chave é uma string (ou um símbolo) e é usada para acessar o valor associado.
 * 
 * Exemplo de objeto:
 * let pessoa = {
 *     nome: 'João',
 *     idade: 30
 * };
 * 
 * Para acessar valores, usamos a notação de ponto ou colchetes:
 * console.log(pessoa.nome); // Saída: 'João'
 * console.log(pessoa['idade']); // Saída: 30
 */

// Criação de um objeto
let pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: 'Desenvolvedora'
};
console.log('Objeto inicial:', pessoa);

// Adição de propriedades
pessoa.email = 'maria@example.com'; // Adiciona uma nova propriedade
console.log('Após adição de propriedade:', pessoa);

// Remoção de propriedades
delete pessoa.profissao; // Remove uma propriedade
console.log('Após remoção de propriedade:', pessoa);

// Acesso a propriedades
let nome = pessoa.nome; // Acesso usando notação de ponto
let idade = pessoa['idade']; // Acesso usando notação de colchetes
console.log('Nome:', nome); // 'Maria'
console.log('Idade:', idade); // 25

// Modificação de propriedades
pessoa.idade = 26; // Modifica o valor da propriedade
console.log('Após modificação de idade:', pessoa); // idade: 26

// Iteração sobre propriedades
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`); // Exibe cada chave e seu valor
}

// Verificação de propriedades
console.log('Tem a propriedade "email"?', 'email' in pessoa); // true
console.log('Tem a propriedade "profissao"?', 'profissao' in pessoa); // false

// Clonagem de objetos
let pessoaClone = { ...pessoa }; // Cria uma cópia do objeto (novo objeto)
console.log('Clone da pessoa:', pessoaClone);

// Manipulação de objetos aninhados
let carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    ano: 2020,
    dono: {
        nome: 'Carlos',
        idade: 35
    }
};
console.log('Dono do carro:', carro.dono.nome); // 'Carlos'

// Adicionando propriedades a objetos aninhados
carro.dono.telefone = '1234-5678'; // Adiciona uma nova propriedade ao objeto aninhado
console.log('Dono do carro com telefone:', carro.dono);
