let botaoAdcionar = getById('btnAdcionarHastag');

botaoAdcionar.addEventListener('click', AdcionarHastag)

function AdcionarHastag(){
    let hastag = getById('inputHastag').value.trim()

   // Quest 8) Letra A 
    let jaExiste = false;
    
    for (let i = 0; i < getById('listaHastags').options.length; i++) {
        if (getById('listaHastags').options[i].value.toLowerCase() === hastag.toLowerCase()) {
            jaExiste = true;
            break;
        }
    }

    if (jaExiste) {
        exibirErro('Essa hashtag já foi adicionada.', 'mensagemErro');
        return;
    }

    // Quest 8) Letra B
    if(hastag === ''){
        exibirErro('Por favor digite uma hastag Primeiro', 'mensagemErro')
        return
    }

    // Quest 8) Letra C
    if(hastag.length < 2){
        exibirErro('Por favor digite uma hastag com pelo menos 2 caracteres', 'mensagemErro')
        return
    }

    // Quest 8) Letra D
    if(getById('listaHastags').options.length >= 5){
        exibirErro('O numero maximo de hastags é 5', 'mensagemErro')
        return
    }
    

        let novaHastag = document.createElement('option');

        novaHastag.textContent = hastag;
        novaHastag.value = hastag;

        getById('listaHastags').appendChild(novaHastag);
}


let botaoRemover = getById('btnRemoverHastag');

botaoRemover.addEventListener('click', RemoverHastag);

function RemoverHastag(){
    let selecionada = getById('listaHastags').selectedOptions;

    if(selecionada.length === 0){
        exibirErro('Para remover selecione uma hastag primeiro ', 'mensagemErro')
        return
    }

    getById('listaHastags').removeChild(selecionada[0])
}