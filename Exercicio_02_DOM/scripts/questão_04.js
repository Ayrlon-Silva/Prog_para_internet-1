let botaoCarregar = getById('carregarImagem');
botaoCarregar.addEventListener('click', CarregarImagem);

function CarregarImagem(){

    let arquivoSelecionado = getById('uploadImagem').files[0];

    let imagem = document.createElement('img');

    if(arquivoSelecionado){
        imagem.src = URL.createObjectURL(arquivoSelecionado);
    }
    else{
        exibirErro('Por favor selecione um imagem primeiro', 'mensagemErro')
    }
    
    getById('resultado').innerHTML = ''
    getById('resultado').appendChild(imagem)
    
}