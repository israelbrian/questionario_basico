// Ocultando os elementos da 2° pergunta!
document.getElementById("idade").style.display = "none";
document.getElementById("idadeInput").style.display = "none";
document.getElementById("submitAge").style.display = "none";

// variavel para o nome | ESCOPO GLOBAL
var nomeInserido

// Função que armazena o nome inserido e responde ao usuario
// Inserindo uma nova pergunta e escondendo a pergunta anterior
function enviarNome () {
    // armazenando o nome
    nomeInserido = document.getElementById("nomeInput").value

    // Retornando a resposta concatenando o nome inserido
    document.getElementById("nome").innerHTML = "<h1> Olá, " + nomeInserido + " ! Tudo bem? </h1>"

    // Escondendo elementos ja ultilizados
    document.getElementById("nomeInput").style.display = "none"; 
    document.getElementById("submitName").style.display = "none"; 

    // Retornando elementos que estavam ocultos
    document.getElementById("idade").style.display = "block"; 
    document.getElementById("idadeInput").style.display = "block";
    const botao = document.getElementById("submitAge");

    // Mostra o botão
    botao.style.display = "block"; // Certifique-se de que o estilo de centralização seja aplicado
    botao.style.margin = "0 auto"; // Centraliza em um layout de bloco
    botao.style.position = "static"; // Remove posicionamento absoluto, se necessário
    
    // Gerando a nova pergunta concatenando o nome inserido
    document.getElementById("idade").innerHTML =  nomeInserido + " qual é a sua idade ? "
}

function enviarIdade() {
    // armazenando a idade
    var idadeInserida = document.getElementById("idadeInput").value
    idadeInserida = parseInt(idadeInserida) // Conversão para numero inteiro
    
    var faixaEtaria 
    
    // Condição para saber a faixa etaria
    if (idadeInserida < 13) {
        faixaEtaria = "Criança"
    } else if (idadeInserida < 21) {
        faixaEtaria = "Adolescente"
    } else if (idadeInserida < 34) {
        faixaEtaria = "Jovem"
    } else if (idadeInserida < 60) {
        faixaEtaria = "Adulto(a)"
    } else {
        faixaEtaria = "Idoso(a)"
    }
    
    
    // Escondendo os elementos
    document.getElementById("idade").style.display = "none"; 
    document.getElementById("idadeInput").style.display = "none";
    document.getElementById("submitAge").style.display = "none";
    
    // Retornando a resposta concatenando a idade | nome | faixa etaria
    document.getElementById("nome").innerHTML = nomeInserido + " você tem " + idadeInserida + " anos e é " + faixaEtaria;
}