// 1. Pegamos o botão
const botao = document.getElementById('meuBotao');

// 2. Criamos a função de clique
botao.addEventListener('click', function() {
    // Em vez de mudar cor por cor, nós apenas 'ligamos/desligamos' uma classe no body
    document.body.classList.toggle('dark-mode');
    
    // Opcional: Mudar o texto do botão dependendo do modo
    if (document.body.classList.contains('dark-mode')) {
        botao.innerText = "Voltar ao Modo Claro";
    } else {
        botao.innerText = "Mágica do JavaScript";
    }
});