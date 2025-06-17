document.addEventListener('DOMContentLoaded', function() {

let botaoMoverDireita = getById('moverParaDireitaBtn');
let botaoMoverEsquerda = getById('moverParaEsquerdaBtn');

let AtivosDisponiveis = getById('ativosDisponiveis');
let CarteiraInvestimentos = getById('carteiraInvestimentos');

function atualizarBotoes() {
        botaoMoverDireita.disabled = AtivosDisponiveis.options.length === 0;
        botaoMoverEsquerda.disabled = CarteiraInvestimentos.options.length === 0;
    }

botaoMoverDireita.addEventListener('click', function(){

    let selecionados = Array.from(AtivosDisponiveis.selectedOptions);

    if(selecionados.length === 0){
        exibirErro('Nenhum Ativo selecionado para mover', 'mensagemErro');
        return;
    }

    for(let i = 0; i < selecionados.length; i++){
        AtivosDisponiveis.removeChild(selecionados[i]);
        CarteiraInvestimentos.appendChild(selecionados[i]);

        selecionados[i].selected = false;
    }

    atualizarBotoes();
});

botaoMoverEsquerda.addEventListener('click', function(){
    let selecionados = Array.from(CarteiraInvestimentos.selectedOptions);

    if(selecionados.length === 0){
        exibirErro('Nenhum Ativo selecionado para mover', 'mensagemErro');
        return;
    }

    for(let i = 0; i < selecionados.length; i++){
        CarteiraInvestimentos.removeChild(selecionados[i]);
        AtivosDisponiveis.appendChild(selecionados[i]);

        selecionados[i].selected = false;
    }

    atualizarBotoes();
});
    atualizarBotoes();
})