function revelar(){
    const imagem = document.getElementById('imagem');
    const nome = document.getElementById('Nome');
    const rank = document.getElementById('Rank');
    const altura = document.getElementById('Altura');
    const posicao = document.getElementById('Posição');
    const nascimento = document.getElementById('Data_Nas');

    imagem.src = 'vinicius_junior.png';
    nome.textContent = 'Vinícius José Paixão de Oliveira Júnior';
    rank.textContent = '9.5';
    altura.textContent = '1,76 m';
    posicao.textContent = 'Ponta-esquerda / Atacante';
    nascimento.textContent = '12/07/2000 (25 anos)';

    nome.classList.remove('placeholder', 'col-6');
    rank.classList.remove('placeholder', 'col-2');
    nascimento.classList.remove('placeholder', 'col-4');
    altura.classList.remove('placeholder', 'col-4');
    posicao.classList.remove('placeholder', 'col-6');

}