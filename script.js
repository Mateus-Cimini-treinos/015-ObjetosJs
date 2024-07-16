// Criação de um objeto chamado usuario
let usuario  = {
    // Propriedade nome com valor 'Mateus'
    nome: 'Mateus', 
    // Propriedade sexo com valor 'Masculino'
    sexo: 'Masculino', 
    // Propriedade idade com valor 18
    idade: 18, 
    // Propriedade altura com valor 1.66
    altura: 1.66, 
    // Propriedade peso com valor 54.5
    peso: 54.5,
    // Método crescer que aceita um parâmetro p com valor padrão 0
    crescer(p=0){
        // Imprime 'Cresceu' no console
        console.log("Cresceu");
        // Incrementa a propriedade altura pelo valor de p
        this.altura += p;
    }
};

// Imprime o valor da propriedade altura do objeto usuario
console.log(usuario.altura); 

// Chama o método crescer do objeto usuario com argumento 0.01
usuario.crescer(0.01);

// Imprime novamente o valor da propriedade altura do objeto usuario após o método crescer ser chamado
console.log(usuario.altura); 

// Imprime uma string interpolada com todas as propriedades do objeto usuario
console.log(`o nome do usuario e: ${usuario.nome} o sexo e: ${usuario.sexo} a idade e: ${usuario.idade} a altura e: ${usuario.altura} e o peso e: ${usuario.peso}`);



